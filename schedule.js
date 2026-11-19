/* Detox · Schedule — a Structured-style daily timeline.
   Loaded by index.html. Exposes window.DetoxSchedule. */
(function () {
  "use strict";

  // ---------- icons ----------
  var I = {
    alarm:'<circle cx="12" cy="13" r="7"/><path d="M12 10v3l2 2"/><path d="M5 3L2 6M19 3l3 3"/>',
    moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    pray:'<path d="M12 3c2.5 2 4 3.6 4 6H8c0-2.4 1.5-4 4-6z"/><path d="M6 21V11h12v10"/><path d="M10 21v-4a2 2 0 0 1 4 0v4"/><path d="M2 21h20M3.5 21v-7M20.5 21v-7"/>',
    quran:'<path d="M2 5.5C4.5 4 7.5 4 12 6c4.5-2 7.5-2 10-.5V19c-2.5-1.5-5.5-1.5-10 .5-4.5-2-7.5-2-10-.5z"/><path d="M12 6v13.5"/>',
    drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    tooth:'<path d="M7 3C4.5 3 3 5 3 7.5c0 3 1.5 4.5 2 7 .4 2 .7 6.5 2.5 6.5 1.6 0 1.8-4 3-5.5.4-.5 1.6-.5 2 0 1.2 1.5 1.4 5.5 3 5.5 1.8 0 2.1-4.5 2.5-6.5.5-2.5 2-4 2-7C21 5 19.5 3 17 3c-2 0-3 1-5 1S9 3 7 3z"/>',
    grad:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>',
    pen:'<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>',
    list:'<path d="M10 6h10M10 12h10M10 18h10"/><path d="M3.5 6l1.5 1.5L7.5 5M3.5 12l1.5 1.5 2.5-2.5M3.5 18l1.5 1.5 2.5-2.5"/>',
    work:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/>',
    laptop:'<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
    phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6 6 0 0 1 3.5 6"/>',
    dumbbell:'<path d="M6 6v12M18 6v12M3 9v6M21 9v6M6 12h12"/>',
    pulse:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',
    food:'<path d="M5 3v8a2 2 0 0 0 4 0V3M7 3v18"/><path d="M17 21V3c-2 1-3 3-3 6v4h3"/>',
    coffee:'<path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17"/><path d="M8 2v3M12 2v3"/>',
    cart:'<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h11L21 7H6"/>',
    train:'<rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 10h14M8 16l-2 4M16 16l2 4"/>',
    plane:'<path d="M3 13l18-7-7 18-3-7z"/>',
    heart:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',
    bed:'<path d="M3 18V6M3 13h18v5M21 13a3 3 0 0 0-3-3h-7v3"/><circle cx="7" cy="10.5" r="1.5"/>',
    leaf:'<path d="M5 19c0-9 6-14 15-14 0 9-5 15-14 15"/><path d="M5 19l8-8"/>',
    music:'<path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
    star:'<path d="M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>',
    calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    // UI only
    check:'<path d="M5 12l4.5 4.5L19 7"/>',
    repeat:'<path d="M17 2l3 3-3 3"/><path d="M4 11V9a4 4 0 0 1 4-4h12"/><path d="M7 22l-3-3 3-3"/><path d="M20 13v2a4 4 0 0 1-4 4H4"/>',
    bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 21a2 2 0 0 0 4 0"/>',
    left:'<path d="M15 6l-6 6 6 6"/>', right:'<path d="M9 6l6 6-6 6"/>',
    plus:'<path d="M12 5v14M5 12h14"/>', x:'<path d="M6 6l12 12M18 6L6 18"/>',
    trash:'<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/>',
    upload:'<path d="M12 15V3M7 8l5-5 5 5"/><path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>',
    download:'<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 15v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/>',
    clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  };
  var PICK = ["alarm","moon","sun","pray","quran","drop","tooth","grad","pen","list","work","laptop","phone","users","dumbbell","pulse","food","coffee","cart","train","plane","heart","bed","leaf","music","star","calendar"];
  var COLORS = ["#f28b82","#6c9bd2","#81c995","#f6c453","#c58af9","#5ec4d6","#fcad70","#ff8bcb","#9aa0a6","#e0603f"];

  // pick an icon from the words in a task's title
  var GUESS = [
    [/\b(pray|prayer|salah|salat|fajr|dhuhr|zuhr|asr|maghrib|isha|jumu?'?ah|masjid|mosque|tahajjud|witr|duha|taraweeh)\b/i, "pray"],
    [/\b(qur'?an|quran|hifz|hifdh|tilawah|surah|juz|mushaf|murajaah|tadabbur|tafsir|tafseer)\b/i, "quran"],
    [/\b(wudu|wudhu|ghusl|shower|bath|water|drink)\b/i, "drop"],
    [/\b(dent|dental|tooth|teeth|clinic|clinical|waxing|morphology|dentist)\w*/i, "tooth"],
    [/\b(lecture|uni|university|seminar|lab|tutorial|exam|class|lesson|course|halaqah|dars)\b/i, "grad"],
    [/\b(revise|revision|study|homework|essay|assignment|notes|write|journal|flashcards?|anki)\b/i, "pen"],
    [/\b(read|reading|book)\b/i, "quran"],
    [/\b(gym|workout|weights|lift|exercise|training)\b/i, "dumbbell"],
    [/\b(run|running|walk|jog|cardio|football|swim|cycling|sport)\b/i, "pulse"],
    [/\b(breakfast|lunch|dinner|eat|meal|food|cook|cooking|suhoor|iftar|snack)\b/i, "food"],
    [/\b(coffee|tea|break|chill)\b/i, "coffee"],
    [/\b(shop|shopping|groceries|grocery|buy|tesco|market)\b/i, "cart"],
    [/\b(train|tube|bus|commute|travel|drive|uber)\b/i, "train"],
    [/\b(flight|airport|holiday|trip|umrah|hajj)\b/i, "plane"],
    [/\b(meeting|meet|family|friends|visit|group|team|tutoring|tutor)\b/i, "users"],
    [/\b(call|phone|ring|facetime)\b/i, "phone"],
    [/\b(email|emails|laptop|code|coding|computer|website|online)\b/i, "laptop"],
    [/\b(work|job|shift|office|reception)\b/i, "work"],
    [/\b(sleep|nap|bed|rest)\b/i, "bed"],
    [/\b(wake|rise|alarm|morning)\b/i, "alarm"],
    [/\b(wind ?down|night|evening)\b/i, "moon"],
    [/\b(sun|outside|garden|gardening|park)\b/i, "sun"],
    [/\b(clean|tidy|plants?|nature)\b/i, "leaf"],
    [/\b(nasheed|music|listen|podcast)\b/i, "music"],
    [/\b(doctor|gp|health|hospital|appointment|charity|sadaqah)\b/i, "heart"],
    [/\b(todo|to-do|tasks?|plan|planning|admin)\b/i, "list"]
  ];
  function guessIcon(t) { for (var i = 0; i < GUESS.length; i++) if (GUESS[i][0].test(t || "")) return GUESS[i][1]; return null; }

  function svg(name, cls) {
    var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("class", "ic" + (cls ? " " + cls : ""));
    s.innerHTML = I[name] || I.star; return s;
  }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }

  // ---------- dates ----------
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function dkey(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function pk(k) { var a = k.split("-"); return new Date(+a[0], +a[1] - 1, +a[2]); }
  function addDays(k, n) { var d = pk(k); d.setDate(d.getDate() + n); return dkey(d); }
  function mondayOf(k) { var d = pk(k); d.setDate(d.getDate() - (d.getDay() + 6) % 7); return dkey(d); }
  function hm(str) { if (!str) return null; var a = str.split(":"); return (+a[0]) * 60 + (+a[1]); }
  function toHM(m) { m = ((m % 1440) + 1440) % 1440; return pad(Math.floor(m / 60)) + ":" + pad(m % 60); }
  function fmtT(m) { m = ((m % 1440) + 1440) % 1440; var h = Math.floor(m / 60), mi = m % 60, ap = h < 12 ? "AM" : "PM"; h = h % 12 || 12; return h + ":" + pad(mi) + " " + ap; }
  function fmtDur(m) { if (m < 60) return m + " min"; var h = Math.floor(m / 60), r = m % 60; return h + "h" + (r ? " " + r + "m" : ""); }
  function nowMin() { var d = new Date(); return d.getHours() * 60 + d.getMinutes(); }
  function today() { return dkey(new Date()); }
  function uid() { return Math.random().toString(36).slice(2, 10); }

  // ---------- model ----------
  var C = null;          // context from index.html: { state, save, rerender, go }
  var V = { day: null, edit: null, toast: "" };   // view state (not saved)

  function S() {
    var s = C.state.sched = C.state.sched || {};
    s.items = Array.isArray(s.items) ? s.items : [];
    s.fired = s.fired || {};
    if (!s.seeded) {
      s.seeded = true;
      s.items.push({ id: uid(), title: "Rise and Shine", icon: "alarm", color: "#f28b82", date: today(), start: "05:00", dur: 0, repeat: { type: "daily" }, remind: 0, fixed: true, subtasks: [], notes: "", done: {} });
      s.items.push({ id: uid(), title: "Wind Down", icon: "moon", color: "#6c9bd2", date: today(), start: "21:30", dur: 0, repeat: { type: "daily" }, remind: 0, fixed: true, subtasks: [], notes: "", done: {} });
    }
    if (!s.sleepFixed) {
      s.sleepFixed = true;
      s.items.forEach(function (it) { if (!it.source && /^(rise and shine|wind down)$/i.test((it.title || "").trim())) it.fixed = true; });
    }
    return s;
  }

  function occursOn(it, k) {
    if (it.skip && it.skip[k]) return false;
    if (k < it.date) return false;
    if (it.until && k > it.until) return false;
    var r = it.repeat || { type: "none" }, iv = r.interval || 1;
    var d = pk(k), d0 = pk(it.date), diff = Math.round((d - d0) / 864e5);
    switch (r.type) {
      case "daily": return diff % iv === 0;
      case "weekdays": var w = d.getDay(); return w >= 1 && w <= 5;
      case "weekly":
        var dow = (d.getDay() + 6) % 7, days = r.days && r.days.length ? r.days : [(d0.getDay() + 6) % 7];
        if (days.indexOf(dow) < 0) return false;
        if (iv > 1) { var wk = Math.round((pk(mondayOf(k)) - pk(mondayOf(it.date))) / (7 * 864e5)); return wk % iv === 0; }
        return true;
      case "monthly": return d.getDate() === d0.getDate() && ((d.getFullYear() - d0.getFullYear()) * 12 + d.getMonth() - d0.getMonth()) % iv === 0;
      case "yearly": return d.getDate() === d0.getDate() && d.getMonth() === d0.getMonth();
      default: return k === it.date;
    }
  }
  function itemsOn(k) {
    return S().items.filter(function (it) { return occursOn(it, k); }).sort(function (a, b) {
      if (!!a.allDay !== !!b.allDay) return a.allDay ? -1 : 1;
      return (hm(a.start) || 0) - (hm(b.start) || 0) || (a.dur || 0) - (b.dur || 0);
    });
  }
  function isFixed(it) { return !!(it.fixed || it.source === "ics" || it.source === "gcal"); }
  function fixedOn(k) { return itemsOn(k).filter(isFixed); }
  function isDone(it, k) { return !!(it.done && it.done[k]); }
  function repeatLabel(r) {
    if (!r || r.type === "none") return "";
    if (r.type === "weekly" && r.days && r.days.length) return "Weekly · " + r.days.map(function (x) { return "MTWTFSS"[x]; }).join(" ");
    return { daily: "Daily", weekdays: "Weekdays", weekly: "Weekly", monthly: "Monthly", yearly: "Yearly" }[r.type] + ((r.interval || 1) > 1 ? " ×" + r.interval : "");
  }

  // ---------- suggestions from past days ----------
  var WD = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
  function norm(t) { return String(t || "").trim().toLowerCase(); }
  // one-off tasks from the last 4 weeks, grouped by title + start time
  function history(beforeKey) {
    var from = addDays(beforeKey, -28), groups = {};
    S().items.forEach(function (it) {
      if (it.source === "ics" || it.allDay || !it.start) return;
      if (it.repeat && it.repeat.type && it.repeat.type !== "none") return;
      if (it.date >= beforeKey || it.date < from) return;
      var key = norm(it.title) + "@" + it.start;
      var g = groups[key] = groups[key] || { item: it, dates: [], last: it.date };
      g.dates.push(it.date); if (it.date >= g.last) { g.last = it.date; g.item = it; }
    });
    return Object.keys(groups).map(function (k) { return groups[k]; });
  }
  function suggestionsFor(k) {
    var s = S(); if (k < today()) return [];
    var dism = (s.dismissed || {})[k] || {};
    var onDay = itemsOn(k), names = {}, spans = [];
    onDay.forEach(function (it) { names[norm(it.title)] = 1; if (it.start && !it.allDay) spans.push([hm(it.start), hm(it.start) + Math.max(it.dur || 0, 1)]); });
    var wd = (pk(k).getDay() + 6) % 7;
    var list = history(k).filter(function (g) {
      var it = g.item, st = hm(it.start), en = st + Math.max(it.dur || 0, 1);
      if (names[norm(it.title)] || dism[norm(it.title) + "@" + it.start]) return false;
      if (k === today() && st < nowMin()) return false;   // don't suggest times already gone today
      return !spans.some(function (sp) { return st < sp[1] && en > sp[0]; });
    }).map(function (g) {
      var same = g.dates.filter(function (d) { return (pk(d).getDay() + 6) % 7 === wd; }).length;
      var days = g.dates.map(function (d) { return (pk(d).getDay() + 6) % 7; }).filter(function (v, i, a) { return a.indexOf(v) === i; }).sort();
      g.score = g.dates.length + same * 2 + (g.last >= addDays(k, -7) ? 1 : 0);
      g.label = (g.dates.length > 1 ? g.dates.length + "× recently · " : "Did this ") + days.map(function (x) { return WD[x]; }).join(", ");
      return g;
    });
    list.sort(function (a, b) { return b.score - a.score; });
    // avoid suggesting two things for the same slot
    var picked = [];
    list.forEach(function (g) {
      var st = hm(g.item.start), en = st + Math.max(g.item.dur || 0, 1);
      if (picked.length < 5 && !picked.some(function (p) { var a = hm(p.item.start), b = a + Math.max(p.item.dur || 0, 1); return st < b && en > a; })) picked.push(g);
    });
    return picked.sort(function (a, b) { return hm(a.item.start) - hm(b.item.start); });
  }
  function copyTo(it, k) {
    S().items.push({ id: uid(), title: it.title, icon: it.icon, color: it.color, date: k, start: it.start, dur: it.dur || 0, allDay: false,
      repeat: { type: "none" }, remind: it.remind == null ? 0 : it.remind, notes: it.notes || "",
      subtasks: (it.subtasks || []).map(function (x) { return { id: uid(), text: x.text, done: false }; }), done: {} });
    C.save();
  }
  // recent tasks for the editor, closest in time first
  function recents(startMin, excludeId) {
    var seen = {}, out = [];
    S().items.slice().sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); }).forEach(function (it) {
      if (it.id === excludeId || it.source === "ics" || !it.title) return;
      var n = norm(it.title); if (seen[n]) return; seen[n] = 1; out.push(it);
    });
    if (startMin != null) out.sort(function (a, b) { var da = a.start ? Math.abs(hm(a.start) - startMin) : 999, db = b.start ? Math.abs(hm(b.start) - startMin) : 999; return da - db; });
    return out.slice(0, 8);
  }

  // ---------- reminders ----------
  function notifyOK() { return typeof Notification !== "undefined" && Notification.permission === "granted"; }
  function checkReminders() {
    var s = S(); if (!s.remindersOn) return;
    var k = today(), now = nowMin(), changed = false;
    itemsOn(k).forEach(function (it) {
      if (it.allDay || it.remind == null || it.remind < 0 || !it.start || isDone(it, k)) return;
      var at = hm(it.start) - it.remind, key = it.id + "@" + k + "@" + it.remind;
      if (now >= at && now < at + 3 && !s.fired[key]) {
        s.fired[key] = 1; changed = true;
        var body = fmtT(hm(it.start)) + (it.dur ? " – " + fmtT(hm(it.start) + it.dur) : "") + (it.remind ? " · in " + it.remind + " min" : " · now");
        if (notifyOK()) { try { new Notification(it.title, { body: body, tag: key }); } catch (e) {} }
        V.toast = "🔔 " + it.title + " · " + body;
        if (C.state.tab === "schedule") C.rerender();
      }
    });
    // keep the fired list small
    var keys = Object.keys(s.fired); if (keys.length > 300) keys.slice(0, keys.length - 200).forEach(function (x) { delete s.fired[x]; });
    if (changed) C.save();
  }

  // ---------- .ics import / export ----------
  function unesc(v) { return v.replace(/\\n/gi, "\n").replace(/\\([,;\\])/g, "$1"); }
  function parseDT(val, params) {
    var m = /^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})?(Z)?)?$/.exec(val.trim());
    if (!m) return null;
    var allDay = !m[4] || /VALUE=DATE(?!-)/.test(params || "");
    var d = m[7] ? new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0))) : new Date(+m[1], +m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0));
    return { d: d, allDay: allDay };
  }
  function parseDur(v) { var m = /P(?:(\d+)W)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?)?/.exec(v || ""); if (!m) return 0; return ((+m[1] || 0) * 7 * 1440) + ((+m[2] || 0) * 1440) + ((+m[3] || 0) * 60) + (+m[4] || 0); }
  function importICS(text) {
    text = text.replace(/\r?\n[ \t]/g, "");
    var lines = text.split(/\r?\n/), evs = [], cur = null;
    lines.forEach(function (ln) {
      if (ln === "BEGIN:VEVENT") cur = { ex: [] };
      else if (ln === "END:VEVENT") { if (cur) evs.push(cur); cur = null; }
      else if (cur) {
        var i = ln.indexOf(":"); if (i < 0) return;
        var left = ln.slice(0, i), val = ln.slice(i + 1), name = left.split(";")[0].toUpperCase();
        if (name === "EXDATE") val.split(",").forEach(function (x) { var p = parseDT(x, left); if (p) cur.ex.push(dkey(p.d)); });
        else cur[name] = { v: val, p: left };
      }
    });
    var s = S(), cutoff = addDays(today(), -60), added = 0, updated = 0, skipped = 0;
    var dayMap = { MO: 0, TU: 1, WE: 2, TH: 3, FR: 4, SA: 5, SU: 6 };
    evs.forEach(function (e) {
      if (!e.DTSTART || e["RECURRENCE-ID"]) { skipped++; return; }
      var st = parseDT(e.DTSTART.v, e.DTSTART.p); if (!st) { skipped++; return; }
      var dur = 0;
      if (e.DTEND) { var en = parseDT(e.DTEND.v, e.DTEND.p); if (en) dur = Math.round((en.d - st.d) / 60000); }
      else if (e.DURATION) dur = parseDur(e.DURATION.v);
      var rep = { type: "none" }, until = null;
      if (e.RRULE) {
        var rr = {}; e.RRULE.v.split(";").forEach(function (kv) { var a = kv.split("="); rr[a[0].toUpperCase()] = a[1]; });
        var f = (rr.FREQ || "").toUpperCase(), iv = parseInt(rr.INTERVAL, 10) || 1;
        if (f === "DAILY") rep = { type: "daily", interval: iv };
        else if (f === "WEEKLY") {
          var days = (rr.BYDAY || "").split(",").map(function (x) { return dayMap[x.replace(/^[+-]?\d+/, "")]; }).filter(function (x) { return x != null; });
          var wd = days.length === 5 && [0, 1, 2, 3, 4].every(function (x) { return days.indexOf(x) >= 0; });
          rep = wd && iv === 1 ? { type: "weekdays" } : { type: "weekly", days: days, interval: iv };
        }
        else if (f === "MONTHLY") rep = { type: "monthly", interval: iv };
        else if (f === "YEARLY") rep = { type: "yearly" };
        if (rr.UNTIL) { var u = parseDT(rr.UNTIL, ""); if (u) until = dkey(u.d); }
        else if (rr.COUNT) {
          var c = parseInt(rr.COUNT, 10), per = rep.type === "weekly" ? 7 * iv / Math.max(1, (rep.days || [1]).length) : rep.type === "monthly" ? 30 * iv : rep.type === "yearly" ? 365 : rep.type === "weekdays" ? 1.4 : iv;
          until = addDays(dkey(st.d), Math.ceil((c - 1) * per));
        }
      }
      var dk = dkey(st.d);
      if (rep.type === "none" && dk < cutoff) { skipped++; return; }
      if (until && until < cutoff) { skipped++; return; }
      var u0 = e.UID ? e.UID.v : (e.SUMMARY ? e.SUMMARY.v : "") + dk;
      var item = {
        title: e.SUMMARY ? unesc(e.SUMMARY.v) : "(No title)", icon: "calendar", color: "#6c9bd2",
        date: dk, start: st.allDay ? null : toHM(st.d.getHours() * 60 + st.d.getMinutes()),
        dur: st.allDay ? 0 : Math.max(0, Math.min(dur, 1440)), allDay: st.allDay, repeat: rep, until: until,
        remind: st.allDay ? null : 10, notes: e.DESCRIPTION ? unesc(e.DESCRIPTION.v).slice(0, 2000) : "", source: "ics", uid: u0
      };
      if (e.EXDATE || e.ex.length) { item.skip = {}; e.ex.forEach(function (x) { item.skip[x] = true; }); }
      var ex = s.items.find(function (x) { return x.uid === u0; });
      if (ex) { var keep = { id: ex.id, done: ex.done, subtasks: ex.subtasks, icon: ex.icon, color: ex.color }; Object.assign(ex, item, keep); updated++; }
      else { item.id = uid(); item.done = {}; item.subtasks = []; s.items.push(item); added++; }
    });
    C.save();
    return { added: added, updated: updated, skipped: skipped, total: evs.length };
  }
  function icsEsc(t) { return String(t || "").replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n"); }
  function icsDate(k, m) { var d = k.replace(/-/g, ""); return m == null ? d : d + "T" + toHM(m).replace(":", "") + "00"; }
  function exportICS() {
    var out = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Detox Focus Hub//Schedule//EN", "CALSCALE:GREGORIAN"];
    var stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
    S().items.forEach(function (it) {
      out.push("BEGIN:VEVENT", "UID:" + it.id + "@detox", "DTSTAMP:" + stamp, "SUMMARY:" + icsEsc(it.title));
      if (it.allDay || !it.start) { out.push("DTSTART;VALUE=DATE:" + icsDate(it.date), "DTEND;VALUE=DATE:" + icsDate(addDays(it.date, 1))); }
      else { var st = hm(it.start); out.push("DTSTART:" + icsDate(it.date, st), "DTEND:" + icsDate(it.date, st + Math.max(it.dur || 0, 0))); }
      var r = it.repeat || {}, rr = null;
      if (r.type === "daily") rr = "FREQ=DAILY";
      else if (r.type === "weekdays") rr = "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR";
      else if (r.type === "weekly") rr = "FREQ=WEEKLY" + (r.days && r.days.length ? ";BYDAY=" + r.days.map(function (x) { return ["MO","TU","WE","TH","FR","SA","SU"][x]; }).join(",") : "");
      else if (r.type === "monthly") rr = "FREQ=MONTHLY";
      else if (r.type === "yearly") rr = "FREQ=YEARLY";
      if (rr) { if ((r.interval || 1) > 1) rr += ";INTERVAL=" + r.interval; if (it.until) rr += ";UNTIL=" + icsDate(it.until) + "T235959"; out.push("RRULE:" + rr); }
      if (it.skip) Object.keys(it.skip).forEach(function (k) { out.push(it.allDay || !it.start ? "EXDATE;VALUE=DATE:" + icsDate(k) : "EXDATE:" + icsDate(k, hm(it.start))); });
      if (it.notes) out.push("DESCRIPTION:" + icsEsc(it.notes));
      if (it.remind != null && it.remind >= 0 && !it.allDay) out.push("BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:" + icsEsc(it.title), "TRIGGER:-PT" + it.remind + "M", "END:VALARM");
      out.push("END:VEVENT");
    });
    out.push("END:VCALENDAR");
    var blob = new Blob([out.join("\r\n")], { type: "text/calendar" }), a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "detox-schedule.ics"; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  }

  // ---------- Google Calendar (Google sign-in in the browser; no server) ----------
  var G = { token: null, exp: 0, busy: false };
  var GSCOPE = "https://www.googleapis.com/auth/calendar.events";
  try { var tk0 = JSON.parse(sessionStorage.getItem("detoxGToken") || "null"); if (tk0 && tk0.exp > Date.now()) { G.token = tk0.t; G.exp = tk0.exp; } } catch (e) {}
  function gc() { var s = S(); s.gcal = s.gcal || {}; return s.gcal; }
  function gOK() { return !!(G.token && Date.now() < G.exp); }
  function gLoad(cb) {
    if (window.google && google.accounts && google.accounts.oauth2) return cb && cb();
    var ex = document.getElementById("gsi-js");
    if (ex) { if (cb) ex.addEventListener("load", function () { cb(); }); return; }
    var sc = document.createElement("script"); sc.id = "gsi-js"; sc.src = "https://accounts.google.com/gsi/client"; sc.async = true;
    sc.onload = function () { cb && cb(); };
    sc.onerror = function () { V.toast = "Couldn't reach Google sign-in. Check your connection."; C.rerender(); };
    document.head.appendChild(sc);
  }
  var tokenClient = null, pendingFns = [];
  function gAuth(fn) {
    var g0 = gc(); if (!g0.clientId) { V.toast = "Add your Google Client ID first (see Google Calendar below)."; C.rerender(); return; }
    if (fn) pendingFns.push(fn);
    gLoad(function () {
      if (!tokenClient || tokenClient._cid !== g0.clientId) {
        tokenClient = google.accounts.oauth2.initTokenClient({ client_id: g0.clientId, scope: GSCOPE, callback: function (r) {
          if (!r || r.error) { pendingFns = []; G.busy = false; V.toast = "Google sign-in didn't finish" + (r && r.error ? " (" + r.error + ")" : "") + "."; C.rerender(); return; }
          G.token = r.access_token; G.exp = Date.now() + ((+r.expires_in || 3600) - 60) * 1000;
          try { sessionStorage.setItem("detoxGToken", JSON.stringify({ t: G.token, exp: G.exp })); } catch (e) {}
          var first = !gc().connected; gc().connected = true; C.save();
          var fns = pendingFns; pendingFns = []; fns.forEach(function (f) { try { f(); } catch (e) {} });
          if (first && !fns.length) gPull();
          C.rerender();
        }, error_callback: function (e) { pendingFns = []; G.busy = false; V.toast = "Google sign-in was closed or blocked" + (e && e.type ? " (" + e.type + ")" : "") + "."; C.rerender(); } });
        tokenClient._cid = g0.clientId;
      }
      tokenClient.requestAccessToken({ prompt: g0.connected ? "" : "consent" });
    });
  }
  function withToken(fn) { if (gOK()) fn(); else gAuth(fn); }
  function gApi(method, path, body) {
    return fetch("https://www.googleapis.com/calendar/v3/" + path, {
      method: method, headers: { "Authorization": "Bearer " + G.token, "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      if (r.status === 401) { G.token = null; try { sessionStorage.removeItem("detoxGToken"); } catch (e) {} throw new Error("Google sign-in expired. Press Sync now to reconnect."); }
      if (r.status === 204 || r.status === 410) return null;
      return r.json().then(function (j) { if (!r.ok) throw new Error((j.error && j.error.message) || ("Google said " + r.status)); return j; });
    });
  }
  function gErr(e) { V.toast = "Google Calendar: " + (e && e.message ? e.message : "something went wrong"); C.rerender(); }
  function localDT(iso) { var d = new Date(iso); return { key: dkey(d), min: d.getHours() * 60 + d.getMinutes(), d: d }; }

  // bring Google events into the timeline (recurring events arrive as single days)
  function gPull(quiet) {
    if (G.busy) return; G.busy = true;
    withToken(function () {
      var from = new Date(); from.setDate(from.getDate() - 14); var to = new Date(); to.setDate(to.getDate() + 120);
      var all = [];
      function page(tok) {
        return gApi("GET", "calendars/primary/events?singleEvents=true&orderBy=startTime&maxResults=2500&timeMin=" + encodeURIComponent(from.toISOString()) +
          "&timeMax=" + encodeURIComponent(to.toISOString()) + (tok ? "&pageToken=" + encodeURIComponent(tok) : "")).then(function (j) {
          all = all.concat((j && j.items) || []); if (j && j.nextPageToken) return page(j.nextPageToken);
        });
      }
      page(null).then(function () {
        var s = S(), localIds = {}, oldDone = {}, oldLook = {};
        s.items.forEach(function (x) { localIds[x.id] = 1; if (x.source === "gcal") { oldDone[x.gid] = x.done || {}; oldLook[x.gid] = { icon: x.icon, color: x.color, subtasks: x.subtasks }; } });
        var fresh = [];
        all.forEach(function (e) {
          if (e.status === "cancelled" || !e.start) return;
          var dId = e.extendedProperties && e.extendedProperties["private"] && e.extendedProperties["private"].detoxId;
          if (dId && localIds[dId]) return;   // made in Detox: the Detox copy is shown instead
          var it = { id: "g-" + e.id, gid: e.id, source: "gcal", title: e.summary || "(No title)", notes: (e.description || "").slice(0, 2000),
            repeat: { type: "none" }, done: oldDone[e.id] || {}, subtasks: [], color: "#6c9bd2", icon: guessIcon(e.summary) || "calendar", recurringGoogle: !!e.recurringEventId };
          if (e.start.date) { it.allDay = true; it.date = e.start.date; it.start = null; it.dur = 0; it.remind = null; }
          else {
            var a = localDT(e.start.dateTime), b = localDT(e.end && e.end.dateTime ? e.end.dateTime : e.start.dateTime);
            it.allDay = false; it.date = a.key; it.start = toHM(a.min); it.dur = Math.max(0, Math.min(1440, Math.round((b.d - a.d) / 60000)));
            var ov = e.reminders && e.reminders.overrides && e.reminders.overrides[0]; it.remind = ov ? ov.minutes : (e.reminders && e.reminders.useDefault ? 10 : null);
          }
          if (oldLook[e.id]) { it.icon = oldLook[e.id].icon; it.color = oldLook[e.id].color; it.subtasks = oldLook[e.id].subtasks || []; }
          fresh.push(it);
        });
        s.items = s.items.filter(function (x) { return x.source !== "gcal"; }).concat(fresh);
        gc().lastSync = Date.now(); C.save(); G.busy = false;
        if (!quiet) V.toast = "Synced " + fresh.length + " events from Google Calendar.";
        C.rerender();
      }).catch(function (e) { G.busy = false; gErr(e); });
    });
    if (!gOK()) setTimeout(function () { G.busy = false; }, 30000);
  }
  function rruleOf(it) {
    var r = it.repeat || {}, rr = null;
    if (r.type === "daily") rr = "FREQ=DAILY";
    else if (r.type === "weekdays") rr = "FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR";
    else if (r.type === "weekly") rr = "FREQ=WEEKLY" + (r.days && r.days.length ? ";BYDAY=" + r.days.map(function (x) { return ["MO","TU","WE","TH","FR","SA","SU"][x]; }).join(",") : "");
    else if (r.type === "monthly") rr = "FREQ=MONTHLY";
    else if (r.type === "yearly") rr = "FREQ=YEARLY";
    if (rr && (r.interval || 1) > 1) rr += ";INTERVAL=" + r.interval;
    if (rr && it.until) rr += ";UNTIL=" + it.until.replace(/-/g, "") + (it.allDay || !it.start ? "" : "T235959Z");
    return rr;
  }
  function toGEvent(it, withRepeat) {
    var tz = "UTC"; try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"; } catch (e) {}
    var ev = { summary: it.title, description: it.notes || "", extendedProperties: { "private": { detoxId: it.id } } };
    if (it.allDay || !it.start) { ev.start = { date: it.date }; ev.end = { date: addDays(it.date, 1) }; }
    else {
      var st = hm(it.start), en = st + Math.max(it.dur || 0, 0), ed = en >= 1440 ? addDays(it.date, 1) : it.date;
      ev.start = { dateTime: it.date + "T" + toHM(st) + ":00", timeZone: tz }; ev.end = { dateTime: ed + "T" + toHM(en) + ":00", timeZone: tz };
    }
    ev.reminders = it.remind != null && it.remind >= 0 && !it.allDay ? { useDefault: false, overrides: [{ method: "popup", minutes: it.remind }] } : { useDefault: false, overrides: [] };
    if (withRepeat) { var rr = rruleOf(it); ev.recurrence = rr ? ["RRULE:" + rr] : []; }
    return ev;
  }
  // send one task's changes to Google
  function gPush(it) {
    var g0 = gc(); if (!g0.connected || !g0.clientId) return;
    if (it.source !== "gcal" && !it.gsync) return;
    withToken(function () {
      var p;
      if (it.source === "gcal") { var ev = toGEvent(it, false); delete ev.extendedProperties; p = gApi("PATCH", "calendars/primary/events/" + encodeURIComponent(it.gid), ev); }
      else if (it.gid) p = gApi("PUT", "calendars/primary/events/" + encodeURIComponent(it.gid), toGEvent(it, true));
      else p = gApi("POST", "calendars/primary/events", toGEvent(it, true)).then(function (j) { var x = S().items.find(function (y) { return y.id === it.id; }); if (x && j && j.id) { x.gid = j.id; C.save(); } return j; });
      p.then(function () { V.toast = "Saved to Google Calendar."; C.rerender(); }).catch(gErr);
    });
  }
  function gDelete(gid) {
    if (!gid || !gc().connected) return;
    withToken(function () { gApi("DELETE", "calendars/primary/events/" + encodeURIComponent(gid)).then(function () { V.toast = "Removed from Google Calendar."; C.rerender(); }).catch(gErr); });
  }
  function gDisconnect() {
    var g0 = gc();
    try { if (G.token && window.google && google.accounts) google.accounts.oauth2.revoke(G.token, function () {}); } catch (e) {}
    G.token = null; try { sessionStorage.removeItem("detoxGToken"); } catch (e) {}
    g0.connected = false; var s = S(); s.items = s.items.filter(function (x) { return x.source !== "gcal"; });
    s.items.forEach(function (x) { delete x.gid; }); C.save(); V.toast = "Disconnected from Google Calendar."; C.rerender();
  }

  function googleRow(tp) {
    var g0 = gc(), r = el("div", "setrow gcal"), l = el("div", "sl");
    var name = el("b"); name.appendChild(svg("calendar", "gic")); name.appendChild(document.createTextNode(" Google Calendar")); l.appendChild(name);
    var right = el("div", "row");
    if (!g0.clientId) {
      l.appendChild(el("span", null, "Link your Google account: your events show here, and tasks you add here go into Google Calendar with their reminders."));
      var su = el("button", "cta", V.gSetup ? "Hide setup" : "Set up"); su.onclick = function () { V.gSetup = !V.gSetup; C.rerender(); }; right.appendChild(su);
    } else if (!g0.connected) {
      l.appendChild(el("span", null, "Ready to connect. You'll be asked to sign in with Google and allow access to your calendar."));
      var cn = el("button", "cta", "Connect Google Calendar"); cn.onclick = function () { gAuth(null); }; right.appendChild(cn);
      var ch = el("button", "ghost", "Change Client ID"); ch.onclick = function () { V.gSetup = true; g0.clientId = ""; C.save(); C.rerender(); }; right.appendChild(ch);
    } else {
      var ago = g0.lastSync ? Math.round((Date.now() - g0.lastSync) / 60000) : null;
      l.appendChild(el("span", null, "Connected · " + (ago == null ? "not synced yet" : ago < 1 ? "synced just now" : "synced " + (ago < 60 ? ago + " min" : Math.round(ago / 60) + " h") + " ago") +
        ". Google events show in blue. New tasks also go to Google unless you untick it in the task."));
      var sy = el("button", "cta", "Sync now"); sy.onclick = function () { gPull(); }; right.appendChild(sy);
      var dc = el("button", "ghost", "Disconnect"); dc.onclick = gDisconnect; right.appendChild(dc);
    }
    r.appendChild(l); r.appendChild(right); tp.appendChild(r);
    if (!g0.clientId && V.gSetup) {
      var box = el("div", "gsetup");
      box.appendChild(el("p", null, "One-time setup, about 10 minutes. Google needs every website that reads a calendar to have its own Client ID:"));
      var ol = el("ol"), origin = location.origin;
      [
        ["Open ", { a: "https://console.cloud.google.com/projectcreate", t: "Google Cloud Console" }, " and create a project called Detox."],
        ["Open ", { a: "https://console.cloud.google.com/apis/library/calendar-json.googleapis.com", t: "Google Calendar API" }, " and press Enable."],
        ["Open ", { a: "https://console.cloud.google.com/auth/overview", t: "Google Auth Platform" }, ", press Get started, name the app Detox, choose External, and add your email."],
        ["Under Audience, press Add users and add your own Gmail address as a test user."],
        ["Under Clients, press Create client → Web application. Under Authorised JavaScript origins add ", { code: origin }, " and press Create."],
        ["Copy the Client ID (it ends in .apps.googleusercontent.com) and paste it below."]
      ].forEach(function (parts) {
        var li = el("li");
        parts.forEach(function (x) {
          if (typeof x === "string") li.appendChild(document.createTextNode(x));
          else if (x.a) { var a = el("a", null, x.t); a.href = x.a; a.target = "_blank"; a.rel = "noopener"; li.appendChild(a); }
          else if (x.code) li.appendChild(el("code", null, x.code));
        });
        ol.appendChild(li);
      });
      box.appendChild(ol);
      box.appendChild(el("p", "meta", "When you connect, Google may say the app isn't verified. That's expected for your own private app: press Continue."));
      var row = el("div", "row");
      var ci = el("input"); ci.type = "text"; ci.placeholder = "xxxxxxxx.apps.googleusercontent.com"; ci.setAttribute("aria-label", "Google Client ID");
      var ok = el("button", "cta", "Save Client ID");
      ok.onclick = function () {
        var v = ci.value.trim();
        if (!/\.apps\.googleusercontent\.com$/.test(v)) { V.toast = "That doesn't look like a Client ID. It should end in .apps.googleusercontent.com"; C.rerender(); return; }
        g0.clientId = v; V.gSetup = false; C.save(); gLoad(); C.rerender();
      };
      row.appendChild(ci); row.appendChild(ok); box.appendChild(row);
      tp.appendChild(box);
    }
  }

  // ---------- rendering ----------
  var PAGE = "schedule";
  function render(app, page) {
    PAGE = page === "calendar" ? "calendar" : "schedule";
    var s = S(), k = V.day || (V.day = today()), tk = today();
    var root = el("div", "sch");

    // top bar
    var top = el("div", "sch-top");
    var d = pk(k);
    var title = el("div", "sch-title"); title.appendChild(el("b", null, d.toLocaleDateString(undefined, { month: "long" }))); title.appendChild(document.createTextNode(" " + d.getFullYear()));
    top.appendChild(title);
    var tools = el("div", "sch-tools");
    PAGE = "schedule";
    var view = s.view || "day";
    function shift(dir) {
      if (view === "month") { var dd = pk(k); V.day = dkey(new Date(dd.getFullYear(), dd.getMonth() + dir, 1)); }
      else V.day = addDays(k, dir * (view === "multi" ? 3 : view === "day" ? 1 : 7));
      V.miniMonth = null;
      C.rerender();
    }
    var unit = view === "month" ? "month" : view === "multi" ? "3 days" : view === "day" ? "day" : "week";
    var prev = el("button", "sch-ib"); prev.title = "Previous " + unit; prev.appendChild(svg("left")); prev.onclick = function () { shift(-1); };
    var tdy = el("button", "sch-pill", "Today"); tdy.onclick = function () { V.day = tk; V.miniMonth = null; C.rerender(); };
    var next = el("button", "sch-ib"); next.title = "Next " + unit; next.appendChild(svg("right")); next.onclick = function () { shift(1); };
    tools.appendChild(prev); tools.appendChild(tdy); tools.appendChild(next);
    top.appendChild(tools);
    root.appendChild(top);

    var seg = el("div", "sch-views");
    [["day","Day"],["multi","Multi-Day"],["week","Week"],["month","Month"]].forEach(function (o) {
      var b = el("button", view === o[0] ? "on" : null, o[1]);
      b.onclick = function () { s.view = o[0]; C.save(); C.rerender(); };
      seg.appendChild(b);
    });
    root.appendChild(seg);

    var now = nowMin(), isToday = k === tk;
    if (view !== "day") {
      if (V.toast) { var t0 = el("div", "sch-toast", V.toast); var tx0 = el("button", "sch-ib"); tx0.appendChild(svg("x")); tx0.onclick = function () { V.toast = ""; C.rerender(); }; t0.appendChild(tx0); root.appendChild(t0); }
      if (view === "month") root.appendChild(monthView(k, tk));
      else root.appendChild(columnsView(view === "multi" ? [k, addDays(k, 1), addDays(k, 2)] : weekDaysOf(k), tk, view));
      if (view === "week" || view === "month") root.appendChild(el("p", "meta sch-fixnote", "The calendar shows fixed tasks only, like lectures, appointments and events. Turn on “Fixed task” when adding one. Your full daily plan is in Day and Multi-Day."));
    } else {

    // day heading
    var dh = el("div", "sch-dayh");
    dh.appendChild(el("h2", null, (k === tk ? "Today · " : "") + d.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })));
    root.appendChild(dh);

    if (V.toast) { var t = el("div", "sch-toast", V.toast); var tx = el("button", "sch-ib"); tx.appendChild(svg("x")); tx.onclick = function () { V.toast = ""; C.rerender(); }; t.appendChild(tx); root.appendChild(t); }

    var items = itemsOn(k), allDay = items.filter(function (x) { return x.allDay || !x.start; }), timed = items.filter(function (x) { return !x.allDay && x.start; });

    // all-day
    if (allDay.length) {
      var ad = el("div", "sch-allday");
      allDay.forEach(function (it) {
        var c = el("div", "sch-chip" + (isDone(it, k) ? " done" : ""));
        var ic = el("span", "ci"); ic.style.background = it.color; ic.appendChild(svg(it.icon)); c.appendChild(ic);
        var tt = el("button", "ct", it.title); tt.onclick = function () { openEditor(it, k); }; c.appendChild(tt);
        c.appendChild(doneBtn(it, k));
        ad.appendChild(c);
      });
      root.appendChild(ad);
    }

    // suggestions from past days
    var sugg = suggestionsFor(k);
    if (sugg.length) {
      var sg = el("div", "sch-sugg");
      var sh0 = el("div", "sch-sugg-h"); sh0.appendChild(svg("star")); sh0.appendChild(el("b", null, "Suggested from your past days")); sg.appendChild(sh0);
      sugg.forEach(function (g) {
        var it = g.item, st0 = hm(it.start);
        var row = el("div", "sch-srow");
        var ic = el("span", "ci"); ic.style.background = it.color; ic.appendChild(svg(it.icon)); row.appendChild(ic);
        var tx = el("div", "stx");
        tx.appendChild(el("b", null, it.title));
        tx.appendChild(el("span", null, fmtT(st0) + (it.dur ? " – " + fmtT(st0 + it.dur) : "") + " · " + g.label));
        row.appendChild(tx);
        var add = el("button", "sch-sadd"); add.title = "Add to this day"; add.appendChild(svg("plus"));
        add.onclick = function () { copyTo(it, k); V.toast = "Added " + it.title + " at " + fmtT(st0) + "."; C.rerender(); };
        var no = el("button", "sch-ib"); no.title = "Not today"; no.appendChild(svg("x"));
        no.onclick = function () { var s0 = S(); s0.dismissed = s0.dismissed || {}; (s0.dismissed[k] = s0.dismissed[k] || {})[norm(it.title) + "@" + it.start] = 1;
          Object.keys(s0.dismissed).forEach(function (d) { if (d < addDays(today(), -2)) delete s0.dismissed[d]; }); C.save(); C.rerender(); };
        row.appendChild(add); row.appendChild(no);
        sg.appendChild(row);
      });
      root.appendChild(sg);
    }

    // timeline
    var tl = el("div", "sch-tl"), nowPlaced = !isToday;
    if (!timed.length) {
      var em = el("div", "sch-empty");
      em.appendChild(el("p", null, allDay.length ? "No timed tasks on this day." : "Nothing planned yet."));
      var b = el("button", "sch-pill acc"); b.appendChild(svg("plus")); b.appendChild(document.createTextNode("Plan this day"));
      b.onclick = function () { openEditor(null, k, isToday ? Math.ceil((now + 1) / 15) * 15 : 9 * 60); };
      em.appendChild(b); tl.appendChild(em);
    }
    timed.forEach(function (it, idx) {
      var st = hm(it.start), en = st + (it.dur || 0), nx = timed[idx + 1];
      if (!nowPlaced && now < st) { tl.appendChild(nowRow(now, idx === 0 ? "Next: " + it.title + " in " + fmtDur(st - now) : null)); nowPlaced = true; }
      var live = isToday && now >= st && now < en;
      if (live) nowPlaced = true;
      tl.appendChild(itemRow(it, k, st, en, live, now));
      if (nx) {
        var ns = hm(nx.start), gap = ns - en;
        if (gap > 0) {
          var inGap = isToday && now >= en && now < ns;
          if (inGap) nowPlaced = true;
          tl.appendChild(gapRow(it.color, nx.color, gap, inGap, en, k));
        } else tl.appendChild(joinRow(it.color, nx.color));
      }
    });
    if (!nowPlaced && timed.length) tl.appendChild(nowRow(now, "Day's plan finished. What's next?"));
    root.appendChild(tl);
    root.appendChild(miniCal(k, tk));

    }

    // reminders / calendar tools
    var tp = el("div", "panel sch-panel");
    tp.appendChild(el("h2", null, "Calendar & reminders"));
    var r1 = el("div", "setrow");
    var l1 = el("div", "sl"); l1.appendChild(el("b", null, "Reminders"));
    l1.appendChild(el("span", null, typeof Notification === "undefined" ? "This browser can't show notifications, so reminders appear at the top of this page." :
      Notification.permission === "denied" ? "Notifications are blocked for this site in your browser settings. Reminders will still show at the top of this page." :
      "Shows a notification at each task's reminder time while this site is open in a tab."));
    r1.appendChild(l1);
    var sw = el("button", "switch" + (s.remindersOn ? " on" : "")); sw.setAttribute("aria-label", "Reminders");
    sw.onclick = function () {
      s.remindersOn = !s.remindersOn; C.save();
      if (s.remindersOn && typeof Notification !== "undefined" && Notification.permission === "default") { try { Notification.requestPermission().then(function () { C.rerender(); }); } catch (e) {} }
      C.rerender();
    };
    r1.appendChild(sw); tp.appendChild(r1);
    googleRow(tp);

    var r2 = el("div", "setrow");
    var l2 = el("div", "sl"); l2.appendChild(el("b", null, "Import a calendar file"));
    l2.appendChild(el("span", null, "Choose an .ics file exported from Google Calendar, Apple Calendar or Outlook. Re-import any time to update."));
    r2.appendChild(l2);
    var fi = el("input"); fi.type = "file"; fi.accept = ".ics,text/calendar"; fi.style.display = "none";
    fi.onchange = function () {
      var f = fi.files && fi.files[0]; if (!f) return;
      var rd = new FileReader(); rd.onload = function () {
        try { var r = importICS(String(rd.result)); V.toast = "Imported " + r.added + " new and updated " + r.updated + " events" + (r.skipped ? " (" + r.skipped + " old or unsupported skipped)" : "") + "."; }
        catch (e) { V.toast = "Couldn't read that file. Make sure it's an .ics calendar export."; }
        C.rerender();
      }; rd.readAsText(f);
    };
    var ib = el("button", "ghost"); ib.appendChild(svg("upload")); ib.appendChild(document.createTextNode("Import .ics")); ib.onclick = function () { fi.click(); };
    r2.appendChild(ib); r2.appendChild(fi); tp.appendChild(r2);

    var r3 = el("div", "setrow");
    var l3 = el("div", "sl"); l3.appendChild(el("b", null, "Export a calendar file"));
    l3.appendChild(el("span", null, "Downloads your schedule as an .ics file with repeats and reminders. Open it on your phone or add it in Google Calendar to get alerts there."));
    r3.appendChild(l3);
    var eb = el("button", "ghost"); eb.appendChild(svg("download")); eb.appendChild(document.createTextNode("Export .ics")); eb.onclick = exportICS;
    r3.appendChild(eb); tp.appendChild(r3);
    var imported = s.items.filter(function (x) { return x.source === "ics"; });
    if (imported.length) {
      var r4 = el("div", "setrow");
      var l4 = el("div", "sl"); l4.appendChild(el("b", null, imported.length + " imported events")); l4.appendChild(el("span", null, "Remove them if you want to import a fresh copy.")); r4.appendChild(l4);
      var rb = el("button", "ghost danger", "Remove imported"), armed = false;
      rb.onclick = function () { if (!armed) { armed = true; rb.textContent = "Press again to remove"; return; } s.items = s.items.filter(function (x) { return x.source !== "ics"; }); C.save(); C.rerender(); };
      r4.appendChild(rb); tp.appendChild(r4);
    }
    root.appendChild(tp);

    // add button
    var fab = el("button", "sch-fab"); fab.title = "Add to schedule"; fab.appendChild(svg("plus"));
    fab.onclick = function () { openEditor(null, k, isToday ? Math.ceil((now + 1) / 15) * 15 : 9 * 60); };
    root.appendChild(fab);

    app.appendChild(root);
    if (V.edit) app.appendChild(editor());
  }

  function weekDaysOf(k) { var m = mondayOf(k), a = []; for (var i = 0; i < 7; i++) a.push(addDays(m, i)); return a; }
  function openDay(dk) { V.day = dk; V.miniMonth = null; S().view = "day"; C.save(); C.rerender(); }

  // Multi-Day and Week: one column per day
  function columnsView(days, tk, view) {
    var wrap = el("div", "sch-cols " + view);
    days.forEach(function (dk) {
      var dd = pk(dk), col = el("div", "sch-col" + (dk === tk ? " today" : "") + (dk === V.day ? " sel" : ""));
      var hd = el("div", "sch-colh");
      var hb = el("button", "sch-colday"); hb.title = "Open this day";
      hb.appendChild(el("span", "wd", dd.toLocaleDateString(undefined, { weekday: "short" })));
      hb.appendChild(el("span", "dn", String(dd.getDate())));
      hb.onclick = function () { openDay(dk); };
      hd.appendChild(hb);
      var ad = el("button", "sch-ib sm"); ad.title = "Add to this day"; ad.appendChild(svg("plus"));
      ad.onclick = function () { openEditor(null, dk, dk === tk ? Math.ceil((nowMin() + 1) / 15) * 15 : 9 * 60); };
      hd.appendChild(ad);
      col.appendChild(hd);
      var its = view === "week" ? fixedOn(dk) : itemsOn(dk), list = el("div", "sch-clist"), placedNow = dk !== tk, nm = nowMin();
      if (!its.length) list.appendChild(el("p", "sch-cempty", view === "week" ? "No fixed tasks" : "Nothing planned"));
      its.forEach(function (it) {
        var st = it.start && !it.allDay ? hm(it.start) : null;
        if (!placedNow && st != null && st > nm) { list.appendChild(el("div", "sch-cnow")); placedNow = true; }
        var r = el("div", "sch-citem" + (isDone(it, dk) ? " done" : ""));
        r.style.setProperty("--c", it.color);
        var ic = el("span", "ci"); ic.style.background = it.color; ic.appendChild(svg(it.icon)); r.appendChild(ic);
        var b = el("button", "ctx");
        b.appendChild(el("span", "ctime", st == null ? "All day" : fmtT(st) + (it.dur ? " – " + fmtT(st + it.dur) : "")));
        b.appendChild(el("span", "cname", it.title));
        b.onclick = function () { openEditor(it, dk); };
        r.appendChild(b);
        r.appendChild(doneBtn(it, dk));
        list.appendChild(r);
      });
      if (!placedNow && its.length) list.appendChild(el("div", "sch-cnow"));
      col.appendChild(list);
      wrap.appendChild(col);
    });
    return wrap;
  }

  // Month: calendar grid; tap a day to open it
  function monthView(k, tk) {
    var d = pk(k), first = new Date(d.getFullYear(), d.getMonth(), 1), start = mondayOf(dkey(first));
    var grid = el("div", "sch-month");
    ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].forEach(function (w) { grid.appendChild(el("div", "sch-mwd", w)); });
    var weeks = Math.ceil(((first.getDay() + 6) % 7 + new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()) / 7);
    for (var i = 0; i < weeks * 7; i++) (function (dk) {
      var dd = pk(dk), inMonth = dd.getMonth() === d.getMonth();
      var c = el("button", "sch-mday" + (inMonth ? "" : " out") + (dk === tk ? " today" : "") + (dk === k ? " sel" : ""));
      c.appendChild(el("span", "mdn", String(dd.getDate())));
      var its = fixedOn(dk), box = el("span", "mits");
      its.slice(0, 3).forEach(function (it) {
        var ch = el("span", "mchip" + (isDone(it, dk) ? " done" : "")); ch.style.setProperty("--c", it.color);
        var dot = el("i"); dot.style.background = it.color; dot.appendChild(svg(it.icon)); ch.appendChild(dot);
        ch.appendChild(el("span", null, it.title));
        box.appendChild(ch);
      });
      if (its.length > 3) box.appendChild(el("span", "mmore", "+" + (its.length - 3) + " more"));
      var dots = el("span", "mdots"); its.slice(0, 4).forEach(function (it) { var x = el("i"); x.style.background = it.color; dots.appendChild(x); });
      c.appendChild(box); c.appendChild(dots);
      c.title = dd.toDateString() + (its.length ? " · " + its.length + (its.length === 1 ? " item" : " items") : "");
      c.onclick = function () { openDay(dk); };
      grid.appendChild(c);
    })(addDays(start, i));
    return grid;
  }

  // small month calendar under the Day view: tap a date to open it
  function miniCal(k, tk) {
    var base = V.miniMonth || k.slice(0, 7), p0 = base.split("-"), m0 = new Date(+p0[0], +p0[1] - 1, 1);
    var box = el("div", "sch-mini");
    var hd = el("div", "mini-h");
    var pv = el("button", "sch-ib sm"); pv.title = "Previous month"; pv.appendChild(svg("left"));
    var nx = el("button", "sch-ib sm"); nx.title = "Next month"; nx.appendChild(svg("right"));
    var mv = function (d) { var x = new Date(m0.getFullYear(), m0.getMonth() + d, 1); V.miniMonth = x.getFullYear() + "-" + pad(x.getMonth() + 1); C.rerender(); };
    pv.onclick = function () { mv(-1); }; nx.onclick = function () { mv(1); };
    hd.appendChild(pv); hd.appendChild(el("b", null, m0.toLocaleDateString(undefined, { month: "long", year: "numeric" }))); hd.appendChild(nx);
    box.appendChild(hd);
    var g = el("div", "mini-g");
    ["M","T","W","T","F","S","S"].forEach(function (w) { g.appendChild(el("span", "mini-wd", w)); });
    var start = mondayOf(dkey(m0)), days = new Date(m0.getFullYear(), m0.getMonth() + 1, 0).getDate();
    var cells = Math.ceil(((m0.getDay() + 6) % 7 + days) / 7) * 7;
    for (var i = 0; i < cells; i++) (function (dk) {
      var dd = pk(dk), its = fixedOn(dk);
      var b = el("button", "mini-d" + (dd.getMonth() !== m0.getMonth() ? " out" : "") + (dk === tk ? " today" : "") + (dk === k ? " sel" : ""));
      b.appendChild(el("span", "n", String(dd.getDate())));
      var dots = el("span", "dots"); its.slice(0, 3).forEach(function (it) { var x = el("i"); x.style.background = it.color; dots.appendChild(x); });
      b.appendChild(dots);
      b.title = dd.toDateString() + (its.length ? " · " + its.length + (its.length === 1 ? " item" : " items") : "");
      b.onclick = function () { V.day = dk; V.miniMonth = dk.slice(0, 7); C.rerender(); window.scrollTo({ top: 0, behavior: "smooth" }); };
      g.appendChild(b);
    })(addDays(start, i));
    box.appendChild(g);
    return box;
  }

  function doneBtn(it, k) {
    var b = el("button", "sch-done" + (isDone(it, k) ? " on" : "")); b.style.setProperty("--c", it.color);
    b.setAttribute("aria-label", isDone(it, k) ? "Mark not done" : "Mark done");
    if (isDone(it, k)) b.appendChild(svg("check"));
    b.onclick = function (e) { e.stopPropagation(); it.done = it.done || {}; if (it.done[k]) delete it.done[k]; else it.done[k] = true; C.save(); C.rerender(); };
    return b;
  }
  function itemRow(it, k, st, en, live, now) {
    var r = el("div", "sch-row" + (isDone(it, k) ? " done" : "") + (live ? " live" : ""));
    r.appendChild(el("div", "sch-time", fmtT(st)));
    var rail = el("div", "sch-rail");
    var pill = el("div", "sch-pill-ic"); pill.style.background = it.color;
    pill.style.height = Math.max(56, Math.min(it.dur || 0, 240) * 0.75) + "px";
    pill.appendChild(svg(it.icon));
    rail.appendChild(pill); r.appendChild(rail);
    var body = el("button", "sch-body");
    var meta = el("div", "sch-meta");
    meta.appendChild(document.createTextNode(fmtT(st) + (it.dur ? " – " + fmtT(en) + " (" + fmtDur(it.dur) + ")" : "")));
    if (it.repeat && it.repeat.type !== "none") meta.appendChild(svg("repeat", "sm"));
    if (it.remind != null && it.remind >= 0) meta.appendChild(svg("bell", "sm"));
    if (isFixed(it)) { var fb = el("span", "sch-fixtag", "Fixed"); meta.appendChild(fb); }
    body.appendChild(meta);
    body.appendChild(el("div", "sch-name", it.title));
    var subs = it.subtasks || [];
    if (subs.length) body.appendChild(el("div", "sch-sub", subs.filter(function (x) { return x.done; }).length + "/" + subs.length + " subtasks"));
    if (live) body.appendChild(el("div", "sch-live", fmtDur(en - now) + " left"));
    body.onclick = function () { openEditor(it, k); };
    r.appendChild(body);
    r.appendChild(doneBtn(it, k));
    return r;
  }
  function gapRow(c1, c2, gap, inGap, start, k) {
    var r = el("div", "sch-gap");
    r.appendChild(el("div", "sch-time"));
    var rail = el("div", "sch-rail"); var dash = el("div", "sch-dash"); dash.style.background = "linear-gradient(" + c1 + "," + c2 + ")"; rail.appendChild(dash);
    r.appendChild(rail);
    var b = el("button", "sch-gtext" + (inGap ? " now" : ""), inGap ? "Interval over. What's next?" : gap >= 20 ? fmtDur(gap) + " free · tap to plan" : "");
    b.onclick = function () { openEditor(null, k, start); };
    r.appendChild(b);
    return r;
  }
  function joinRow(c1, c2) {
    var r = el("div", "sch-join"); r.appendChild(el("div", "sch-time"));
    var rail = el("div", "sch-rail"); var ln = el("div", "sch-line"); ln.style.background = "linear-gradient(" + c1 + "," + c2 + ")"; rail.appendChild(ln); r.appendChild(rail);
    return r;
  }
  function nowRow(now, text) {
    var r = el("div", "sch-now"); r.appendChild(el("div", "sch-time", fmtT(now)));
    r.appendChild(el("div", "sch-nowdot")); r.appendChild(el("div", "sch-nowtx", text || "Now"));
    return r;
  }

  // ---------- editor ----------
  function openEditor(it, k, startMin) {
    var dr = it ? JSON.parse(JSON.stringify(it)) : {
      id: null, title: "", icon: "list", color: COLORS[1], date: k, start: toHM(startMin != null ? startMin : 540), dur: 30, allDay: false,
      repeat: { type: "none" }, remind: 0, subtasks: [], notes: "", done: {}
    };
    if (dr.start == null && !dr.allDay) dr.start = "09:00";
    V.edit = { draft: dr, occ: k, isNew: !it, iconsOpen: !it, iconPicked: !!(it && it.icon && it.icon !== "list") };
    C.rerender();
  }
  function closeEditor() { V.edit = null; C.rerender(); }

  function editor() {
    var E = V.edit, dr = E.draft, s = S();
    var ov = el("div", "sch-ov"); ov.onclick = function (e) { if (e.target === ov) closeEditor(); };
    var sh = el("div", "sch-sheet");
    // header band
    var hd = el("div", "sch-hd"); hd.style.background = dr.color;
    var pill = el("button", "sch-hpill"); pill.title = "Change icon"; pill.appendChild(svg(dr.icon));
    pill.onclick = function () { E.iconsOpen = !E.iconsOpen; C.rerender(); };
    hd.appendChild(pill);
    var hm0 = el("div", "sch-hmain");
    var st = hm(dr.start) || 0;
    hm0.appendChild(el("div", "sch-hmeta", dr.allDay ? "All day" : fmtT(st) + (dr.dur ? " – " + fmtT(st + dr.dur) + " (" + fmtDur(dr.dur) + ")" : "")));
    var ti = el("input", "sch-htitle"); ti.type = "text"; ti.placeholder = "Structure your day"; ti.value = dr.title; ti.maxLength = 120; ti.setAttribute("aria-label", "Title");
    ti.oninput = function () {
      dr.title = ti.value;
      if (E.iconPicked) return;
      var g = guessIcon(ti.value) || "list";
      if (g !== dr.icon) {
        dr.icon = g;
        pill.innerHTML = ""; pill.appendChild(svg(g));
        document.querySelectorAll(".sch-icb").forEach(function (b) { var on = b.dataset.icon === g; b.classList.toggle("on", on); b.style.background = on ? dr.color : ""; });
      }
    };
    ti.onkeyup = ti.onchange = function () { ti.oninput(); };
    ti.onkeydown = function (e) { if (e.key === "Enter") saveEdit(); };
    hm0.appendChild(ti);
    hd.appendChild(hm0);
    var cl = el("button", "sch-ib light"); cl.title = "Close"; cl.appendChild(svg("x")); cl.onclick = closeEditor; hd.appendChild(cl);
    sh.appendChild(hd);
    if (E.isNew) setTimeout(function () { ti.focus(); }, 30);

    var bd = el("div", "sch-ebody");

    // recent tasks: one tap fills the form
    var rec = recents(dr.allDay ? null : hm(dr.start), dr.id);
    if (rec.length && E.isNew) {
      var rc = el("div", "sch-recent");
      rc.appendChild(el("span", "meta", "Recent"));
      rec.forEach(function (it) {
        var b = el("button", "sch-rchip"); var ci = el("i"); ci.style.background = it.color; ci.appendChild(svg(it.icon)); b.appendChild(ci);
        b.appendChild(document.createTextNode(it.title));
        if (it.start && !it.allDay) b.appendChild(el("small", null, fmtT(hm(it.start))));
        b.onclick = function () {
          dr.title = it.title; dr.icon = it.icon; dr.color = it.color; dr.dur = it.dur || 0; E.iconPicked = true;
          if (it.start && !it.allDay) { dr.start = it.start; dr.allDay = false; }
          dr.remind = it.remind == null ? dr.remind : it.remind;
          dr.subtasks = (it.subtasks || []).map(function (x) { return { id: uid(), text: x.text, done: false }; });
          C.rerender();
        };
        rc.appendChild(b);
      });
      bd.appendChild(rc);
    }

    // icons + colours
    if (E.iconsOpen) {
      var ig = el("div", "sch-card");
      var cols = el("div", "sch-colors");
      COLORS.forEach(function (c) { var b = el("button", "sch-sw" + (dr.color === c ? " on" : "")); b.style.background = c; b.setAttribute("aria-label", "Colour " + c);
        b.onclick = function () { dr.color = c; dr.title = ti.value; C.rerender(); }; cols.appendChild(b); });
      ig.appendChild(cols);
      var icons = el("div", "sch-icons");
      PICK.forEach(function (n) { var b = el("button", "sch-icb" + (dr.icon === n ? " on" : "")); b.title = n; b.dataset.icon = n; b.appendChild(svg(n));
        if (dr.icon === n) b.style.background = dr.color;
        b.onclick = function () { dr.icon = n; E.iconPicked = true; dr.title = ti.value; C.rerender(); }; icons.appendChild(b); });
      ig.appendChild(icons);
      bd.appendChild(ig);
    }

    // date / time
    var c1 = el("div", "sch-card");
    var rD = el("div", "sch-line2");
    rD.appendChild(svg("calendar", "acc"));
    var di = el("input"); di.type = "date"; di.value = dr.date; di.setAttribute("aria-label", "Date");
    di.onchange = function () { if (di.value) dr.date = di.value; };
    rD.appendChild(di);
    var adl = el("label", "sch-chk"); var adc = el("input"); adc.type = "checkbox"; adc.checked = !!dr.allDay;
    adc.onchange = function () { dr.allDay = adc.checked; if (!dr.allDay && !dr.start) dr.start = "09:00"; dr.title = ti.value; C.rerender(); };
    adl.appendChild(adc); adl.appendChild(document.createTextNode("All-day")); rD.appendChild(adl);
    c1.appendChild(rD);
    if (!dr.allDay) {
      var rT = el("div", "sch-line2");
      rT.appendChild(svg("clock", "acc"));
      var sI = el("input"); sI.type = "time"; sI.value = dr.start; sI.setAttribute("aria-label", "Start time");
      var eI = el("input"); eI.type = "time"; eI.value = toHM(hm(dr.start) + (dr.dur || 0)); eI.setAttribute("aria-label", "End time");
      sI.onchange = function () { if (sI.value) { dr.start = sI.value; dr.title = ti.value; C.rerender(); } };
      eI.onchange = function () { if (eI.value) { var d0 = hm(eI.value) - hm(dr.start); if (d0 < 0) d0 += 1440; dr.dur = d0; dr.title = ti.value; C.rerender(); } };
      rT.appendChild(sI); rT.appendChild(el("span", "sch-dash-t", "–")); rT.appendChild(eI);
      c1.appendChild(rT);
      var quick = el("div", "sch-quick");
      [0, 15, 30, 45, 60, 90, 120].forEach(function (m) {
        var b = el("button", "sch-q" + ((dr.dur || 0) === m ? " on" : ""), m === 0 ? "Point" : fmtDur(m));
        b.onclick = function () { dr.dur = m; dr.title = ti.value; C.rerender(); }; quick.appendChild(b);
      });
      c1.appendChild(quick);
    }
    bd.appendChild(c1);

    // repeat + reminder
    var c2 = el("div", "sch-card");
    var rR = el("div", "sch-line2"); rR.appendChild(svg("repeat", "acc"));
    var rs = el("select"); rs.setAttribute("aria-label", "Repeat"); if (dr.source === "gcal") rs.disabled = true;
    [["none","Doesn't repeat"],["daily","Every day"],["weekdays","Weekdays (Mon–Fri)"],["weekly","Weekly on…"],["monthly","Monthly"],["yearly","Yearly"]].forEach(function (o) { var x = el("option", null, o[1]); x.value = o[0]; rs.appendChild(x); });
    rs.value = (dr.repeat && dr.repeat.type) || "none";
    rs.onchange = function () { dr.repeat = { type: rs.value }; if (rs.value === "weekly") dr.repeat.days = [(pk(dr.date).getDay() + 6) % 7]; dr.title = ti.value; C.rerender(); };
    rR.appendChild(rs);
    if (dr.repeat && dr.repeat.type !== "none") {
      var ul = el("label", "sch-chk"); ul.appendChild(document.createTextNode("Until"));
      var ui = el("input"); ui.type = "date"; ui.value = dr.until || ""; ui.onchange = function () { dr.until = ui.value || null; };
      ul.appendChild(ui); rR.appendChild(ul);
    }
    c2.appendChild(rR);
    if (dr.repeat && dr.repeat.type === "weekly") {
      var wd = el("div", "sch-wdays");
      ["M","T","W","T","F","S","S"].forEach(function (L, i) {
        var on = (dr.repeat.days || []).indexOf(i) >= 0, b = el("button", "sch-wd" + (on ? " on" : ""), L);
        if (on) b.style.background = dr.color;
        b.onclick = function () { var a = dr.repeat.days = dr.repeat.days || []; var j = a.indexOf(i); if (j >= 0) { if (a.length > 1) a.splice(j, 1); } else a.push(i); a.sort(); dr.title = ti.value; C.rerender(); };
        wd.appendChild(b);
      });
      c2.appendChild(wd);
    }
    var rF = el("div", "sch-line2");
    rF.appendChild(svg("calendar", "acc"));
    var fx = el("span"); fx.style.flex = "1"; fx.appendChild(document.createTextNode("Fixed task"));
    fx.appendChild(el("small", "sch-fixhint", dr.source === "gcal" || dr.source === "ics" ? " · from your calendar, always shown" : " · shows on the calendar (lectures, appointments, events)"));
    rF.appendChild(fx);
    var fsw = el("button", "switch" + (isFixed(dr) ? " on" : "")); fsw.setAttribute("role", "switch"); fsw.setAttribute("aria-label", "Fixed task");
    fsw.disabled = dr.source === "gcal" || dr.source === "ics";
    fsw.onclick = function () { dr.fixed = !dr.fixed; dr.title = ti.value; C.rerender(); };
    rF.appendChild(fsw);
    c2.appendChild(rF);
    var rM = el("div", "sch-line2"); rM.appendChild(svg("bell", "acc"));
    var ms = el("select"); ms.setAttribute("aria-label", "Reminder");
    [["-1","No reminder"],["0","At start time"],["5","5 min before"],["10","10 min before"],["15","15 min before"],["30","30 min before"],["60","1 hour before"]].forEach(function (o) { var x = el("option", null, o[1]); x.value = o[0]; ms.appendChild(x); });
    ms.value = String(dr.remind == null ? -1 : dr.remind);
    ms.onchange = function () { var v = parseInt(ms.value, 10); dr.remind = v < 0 ? null : v; };
    ms.disabled = !!dr.allDay;
    rM.appendChild(ms);
    c2.appendChild(rM);
    bd.appendChild(c2);

    // subtasks + notes
    var c3 = el("div", "sch-card");
    (dr.subtasks || []).forEach(function (sb, i) {
      var r = el("div", "sch-subrow");
      var cb = el("input"); cb.type = "checkbox"; cb.checked = !!sb.done; cb.onchange = function () { sb.done = cb.checked; };
      var tx = el("input"); tx.type = "text"; tx.value = sb.text; tx.oninput = function () { sb.text = tx.value; };
      var del = el("button", "sch-ib"); del.title = "Remove subtask"; del.appendChild(svg("x")); del.onclick = function () { dr.subtasks.splice(i, 1); dr.title = ti.value; C.rerender(); };
      r.appendChild(cb); r.appendChild(tx); r.appendChild(del); c3.appendChild(r);
    });
    var ar = el("div", "sch-subrow add");
    ar.appendChild(svg("plus", "acc"));
    var at = el("input"); at.type = "text"; at.placeholder = "Add subtask"; at.setAttribute("aria-label", "Add subtask");
    at.onkeydown = function (e) { if (e.key === "Enter" && at.value.trim()) { (dr.subtasks = dr.subtasks || []).push({ id: uid(), text: at.value.trim(), done: false }); dr.title = ti.value; C.rerender();
      setTimeout(function () { var x = document.querySelector(".sch-subrow.add input"); if (x) x.focus(); }, 20); } };
    ar.appendChild(at); c3.appendChild(ar);
    var nt = el("textarea", "sch-notes"); nt.placeholder = "Add notes, links or phone numbers…"; nt.value = dr.notes || ""; nt.oninput = function () { dr.notes = nt.value; };
    c3.appendChild(nt);
    bd.appendChild(c3);

    if (gc().connected && dr.source !== "gcal" && dr.source !== "ics") {
      if (E.isNew && dr.gsync == null) dr.gsync = gc().pushDefault !== false;
      var gl = el("label", "sch-gsync"); var gcb = el("input"); gcb.type = "checkbox"; gcb.checked = !!dr.gsync;
      gcb.onchange = function () { dr.gsync = gcb.checked; if (E.isNew) { gc().pushDefault = gcb.checked; C.save(); } };
      gl.appendChild(gcb); gl.appendChild(svg("calendar", "acc")); gl.appendChild(document.createTextNode(dr.gid ? "Synced with Google Calendar" : "Also save to Google Calendar"));
      bd.appendChild(gl);
    }
    if (dr.source === "gcal") bd.appendChild(el("p", "meta", "From Google Calendar. Changes to the title, time, reminder and notes are saved back to Google" + (dr.recurringGoogle ? " for this day only." : ".")));
    if (dr.repeat && dr.repeat.type !== "none" && !E.isNew) bd.appendChild(el("p", "meta", "Changes apply to every repeat of this task."));

    // footer
    var ft = el("div", "sch-foot");
    if (!E.isNew) {
      var orig = s.items.find(function (x) { return x.id === dr.id; });
      if (orig && orig.repeat && orig.repeat.type !== "none") {
        var d1 = el("button", "ghost danger", "Delete this day only");
        d1.onclick = function () { orig.skip = orig.skip || {}; orig.skip[E.occ] = true; C.save(); closeEditor();
          if (orig.gid) { V.toast = "Removed here only. Edit the series in Google Calendar to skip it there too."; C.rerender(); } };
        ft.appendChild(d1);
      }
      var d2 = el("button", "ghost danger"), armed = false; d2.appendChild(svg("trash")); d2.appendChild(document.createTextNode(orig && orig.repeat && orig.repeat.type !== "none" ? "Delete all" : "Delete"));
      d2.onclick = function () { if (!armed) { armed = true; d2.lastChild.textContent = "Press again"; return; }
        var gone = s.items.find(function (x) { return x.id === dr.id; }); s.items = s.items.filter(function (x) { return x.id !== dr.id; }); C.save(); closeEditor();
        if (gone && gone.gid) gDelete(gone.gid); };
      ft.appendChild(d2);
    }
    var sp = el("span"); sp.style.flex = "1"; ft.appendChild(sp);
    var cn = el("button", "ghost", "Cancel"); cn.onclick = closeEditor; ft.appendChild(cn);
    var sv = el("button", "cta", E.isNew ? "Add" : "Save"); sv.onclick = saveEdit; ft.appendChild(sv);
    bd.appendChild(ft);

    sh.appendChild(bd);
    ov.appendChild(sh);
    return ov;
  }
  function saveEdit() {
    var E = V.edit, dr = E.draft, s = S();
    var t = document.querySelector(".sch-htitle"); if (t) dr.title = t.value;
    dr.title = (dr.title || "").trim() || "Untitled";
    if (!E.iconPicked) { var g = guessIcon(dr.title); if (g) dr.icon = g; }
    if (dr.allDay) { dr.start = null; dr.dur = 0; }
    if (E.isNew) { dr.id = uid(); s.items.push(dr); }
    else { var i = s.items.findIndex(function (x) { return x.id === dr.id; }); if (i >= 0) s.items[i] = dr; }
    V.day = E.isNew ? dr.date : V.day;
    C.save(); V.edit = null; C.rerender();
    if (dr.source === "gcal" || dr.gsync) gPush(dr);
  }

  // ---------- public ----------
  window.DetoxSchedule = {
    init: function (ctx) { C = ctx; S(); setInterval(checkReminders, 20000); setTimeout(checkReminders, 1500);
      var g0 = gc();
      if (g0.clientId && g0.connected) { gLoad(); if (gOK() && (!g0.lastSync || Date.now() - g0.lastSync > 5 * 60000)) setTimeout(function () { gPull(true); }, 800); }
    },
    render: function (app, page) { render(app, page); },
    today: function () { var k = today(), its = itemsOn(k), now = nowMin();
      var left = its.filter(function (it) { return !isDone(it, k); }).length;
      var nxt = its.filter(function (it) { return !it.allDay && it.start && hm(it.start) >= now && !isDone(it, k); })[0];
      return { total: its.length, left: left, next: nxt ? fmtT(hm(nxt.start)) + " · " + nxt.title : null }; },
    addFromTodo: function (title, dateKey) {
      var n = nowMin(), k = dateKey || today();
      V.day = k;
      openEditor(null, k, k === today() ? Math.ceil((n + 1) / 30) * 30 : 9 * 60);
      V.edit.draft.title = title; V.edit.draft.icon = guessIcon(title) || "list";
    },
    icon: svg
  };
})();
