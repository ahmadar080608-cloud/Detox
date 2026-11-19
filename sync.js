// Google sign-in and cloud sync for Detox (Firebase: same project as the Arabic website).
// Data lives in Firestore at detox/{uid}; Google Calendar and Drive use an access token from the same sign-in.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const app = initializeApp({
  apiKey: "AIzaSyAWRQSmUsWkYkzkBElg5f3MJYMQuFyWOcs",
  authDomain: "arabic-website-2674b.firebaseapp.com",
  projectId: "arabic-website-2674b",
  storageBucket: "arabic-website-2674b.firebasestorage.app",
  messagingSenderId: "577783700891",
  appId: "1:577783700891:web:ddb10104c62e1781a5153e"
});
const auth = getAuth(app), db = getFirestore(app);
const D = () => window.DETOX;
const SCOPES = ["https://www.googleapis.com/auth/calendar.events", "https://www.googleapis.com/auth/drive.file"];

const NICE = {
  "auth/popup-blocked": "The Google window was blocked. Allow pop-ups for this site and try again.",
  "auth/popup-closed-by-user": "The Google window was closed before signing in.",
  "auth/cancelled-popup-request": "The Google window was closed before signing in.",
  "auth/unauthorized-domain": "This website isn't on Firebase's Authorized domains list yet (Authentication → Settings).",
  "auth/operation-not-allowed": "Google sign-in isn't switched on in Firebase (Authentication → Sign-in method).",
  "auth/network-request-failed": "No internet connection.",
  "permission-denied": "RULES",
  "unavailable": "Can't reach the database. Check your connection."
};
const nice = e => NICE[e?.code] || (e?.message || "Something went wrong.").replace(/^Firebase: /, "");

const SY = window.DetoxSync = { ready: true, user: null, status: "out", last: 0, err: "", rules: false, ask: null };
const paint = () => { try { D() && D().onSync && D().onSync(); } catch (e) {} };

// ---------- helpers ----------
function hash(obj) {
  const s = JSON.stringify(obj, function (k, v) { return this === obj && k === "_sync" ? undefined : v; });
  let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
  return s.length + ":" + h;
}
const hkey = () => "detox.syncHash." + SY.user.uid;
function backupLocal(label) {
  try {
    const list = JSON.parse(localStorage.getItem("detox.backups") || "[]");
    list.unshift({ at: Date.now(), label, s: localStorage.getItem(D().KEY) || "{}" });
    localStorage.setItem("detox.backups", JSON.stringify(list.slice(0, 3)));
  } catch (e) {}
}
function looksEmpty(st) {
  const n = (st.tasks || []).length + (st.todos || []).length + Object.keys(st.sciGoals || {}).length + Object.keys(st.notes || {}).length + Math.max(0, ((st.sched && st.sched.items) || []).length - 2);
  return n === 0 && JSON.stringify(st).length < 6000;
}
const ref = () => doc(db, "detox", SY.user.uid);

// ---------- sync ----------
let ready = false, timer = null, pushing = false, again = false, lastPull = 0;
function take(cloudStr, cloudT, why) {
  let obj = {}; try { obj = JSON.parse(cloudStr || "{}"); } catch (e) {}
  obj._sync = { uid: SY.user.uid, t: cloudT };
  try {
    localStorage.setItem(D().KEY, JSON.stringify(obj));
    localStorage.setItem(hkey(), hash(obj));
    sessionStorage.setItem("detox.syncMsg", why || "Loaded your data from your Google account.");
  } catch (e) { SY.status = "error"; SY.err = "Couldn't save on this device: storage is full."; paint(); return; }
  location.reload();
}
async function pull(initial) {
  if (!SY.user) return;
  SY.status = "syncing"; paint(); lastPull = Date.now();
  try {
    const snap = await getDoc(ref());
    const st = D().getState(), same = st._sync && st._sync.uid === SY.user.uid;
    const changed = hash(st) !== localStorage.getItem(hkey());
    if (!snap.exists()) { ready = true; await push(); return; }
    const d = snap.data(), cloudT = d.t || 0;
    if (!same) {
      if (looksEmpty(st)) return take(d.s, cloudT);
      ready = false; SY.status = "ask"; SY.ask = { t: cloudT, s: d.s, name: d.name || "" }; paint(); return;
    }
    if (cloudT > (st._sync.t || 0)) {
      if (changed) backupLocal("This device before syncing");
      return take(d.s, cloudT, "Loaded your latest changes from your other device.");
    }
    ready = true;
    if (changed) await push(); else { SY.status = "synced"; SY.last = Date.now(); SY.err = ""; paint(); }
  } catch (e) { fail(e); }
}
function fail(e) {
  const m = nice(e); SY.status = "error";
  if (m === "RULES") { SY.rules = true; SY.err = "The database rules need one addition before Detox can save (see below)."; } else SY.err = m;
  paint();
}
async function push() {
  if (!SY.user || !ready) return;
  if (pushing) { again = true; return; }
  pushing = true; SY.status = "syncing"; paint();
  try {
    const st = D().getState(), t = Date.now();
    const copy = Object.assign({}, st, { _sync: { uid: SY.user.uid, t } });
    const str = JSON.stringify(copy);
    if (str.length > 900000) throw { message: "Your data is too big to sync (over 900 KB). Remove old completed tasks and try again." };
    await setDoc(ref(), { s: str, t, name: SY.user.displayName || "", email: SY.user.email || "", updated: serverTimestamp() });
    st._sync = { uid: SY.user.uid, t };
    try { localStorage.setItem(D().KEY, JSON.stringify(st)); localStorage.setItem(hkey(), hash(st)); } catch (e) {}
    SY.status = "synced"; SY.last = Date.now(); SY.err = ""; SY.rules = false;
  } catch (e) { fail(e); }
  pushing = false; paint();
  if (again) { again = false; push(); }
}
SY.changed = () => { if (!SY.user || !ready) return; clearTimeout(timer); timer = setTimeout(push, 2000); };
SY.syncNow = () => { clearTimeout(timer); return ready ? pull(false) : pull(true); };
SY.choose = (which) => {
  const a = SY.ask; if (!a) return; SY.ask = null;
  if (which === "cloud") { backupLocal("This device before signing in"); take(a.s, a.t, "Loaded your data from your Google account. What was on this device is kept as a backup in Settings."); }
  else { ready = true; push(); }
};
document.addEventListener("visibilitychange", () => {
  if (!SY.user) return;
  if (document.visibilityState === "hidden") { if (timer) { clearTimeout(timer); timer = null; push(); } }
  else if (ready && Date.now() - lastPull > 30000) pull(false);
});

// ---------- sign in / out ----------
function provider(withScopes) {
  const p = new GoogleAuthProvider();
  if (withScopes) SCOPES.forEach(s => p.addScope(s));
  const prm = { prompt: "select_account" };
  if (SY.user && SY.user.email) { prm.login_hint = SY.user.email; delete prm.prompt; }
  p.setCustomParameters(prm);
  return p;
}
function keepToken(res) {
  const c = GoogleAuthProvider.credentialFromResult(res);
  if (c && c.accessToken) {
    SY.gtoken = { t: c.accessToken, exp: Date.now() + 55 * 60000 };
    try { sessionStorage.setItem("detox.gtoken", JSON.stringify(SY.gtoken)); } catch (e) {}
  }
}
try { const g = JSON.parse(sessionStorage.getItem("detox.gtoken") || "null"); if (g && g.exp > Date.now()) SY.gtoken = g; } catch (e) {}
SY.signIn = async () => {
  SY.err = ""; SY.status = "signing"; paint();
  try { const res = await signInWithPopup(auth, provider(true)); keepToken(res); }
  catch (e) { SY.status = "out"; SY.err = nice(e); paint(); }
};
SY.signOut = async () => {
  clearTimeout(timer); if (ready) await push();
  ready = false; SY.gtoken = null; try { sessionStorage.removeItem("detox.gtoken"); } catch (e) {}
  await signOut(auth);
};
// Google API token for Calendar and Drive (lasts about an hour)
SY.hasToken = () => !!(SY.gtoken && SY.gtoken.exp > Date.now());
SY.googleToken = async (interactive) => {
  if (SY.hasToken()) return SY.gtoken.t;
  if (!SY.user) throw { message: "Sign in with Google in Settings first." };
  if (!interactive) throw { message: "Google access has expired. Tap Reconnect in Settings." };
  try { const res = await signInWithPopup(auth, provider(true)); keepToken(res); }
  catch (e) { throw { message: nice(e) }; }
  if (!SY.hasToken()) throw { message: "Google didn't give access to Calendar and Drive. Try again and tick both boxes." };
  paint();
  return SY.gtoken.t;
};
SY.dropToken = () => { SY.gtoken = null; try { sessionStorage.removeItem("detox.gtoken"); } catch (e) {} paint(); };

onAuthStateChanged(auth, (u) => {
  SY.user = u; ready = false;
  if (u) pull(true); else { SY.status = "out"; paint(); }
});
paint();
