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
      s.items.push({ id: uid(), title: "Rise and Shine", icon: "alarm", color: "#f28b82", date: today(), start: "05:00", dur: 0, repeat: { type: "daily" }, remind: 0, subtasks: [], notes: "", done: {} });
      s.items.push({ id: uid(), title: "Wind Down", icon: "moon", color: "#6c9bd2", date: today(), start: "21:30", dur: 0, repeat: { type: "daily" }, remind: 0, subtasks: [], notes: "", done: {} });
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
  function isDone(it, k) { return !!(it.done && it.done[k]); }
  function repeatLabel(r) {
    if (!r || r.type === "none") return "";
    if (r.type === "weekly" && r.days && r.days.length) return "Weekly · " + r.days.map(function (x) { return "MTWTFSS"[x]; }).join(" ");
    return { daily: "Daily", weekdays: "Weekdays", weekly: "Weekly", monthly: "Monthly", yearly: "Yearly" }[r.type] + ((r.interval || 1) > 1 ? " ×" + r.interval : "");
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

  // ---------- rendering ----------
  function render(app) {
    var s = S(), k = V.day || (V.day = today()), tk = today();
    var root = el("div", "sch");

    // top bar
    var top = el("div", "sch-top");
    var d = pk(k);
    var title = el("div", "sch-title"); title.appendChild(el("b", null, d.toLocaleDateString(undefined, { month: "long" }))); title.appendChild(document.createTextNode(" " + d.getFullYear()));
    top.appendChild(title);
    var tools = el("div", "sch-tools");
    var prev = el("button", "sch-ib"); prev.title = "Previous week"; prev.appendChild(svg("left")); prev.onclick = function () { V.day = addDays(k, -7); C.rerender(); };
    var tdy = el("button", "sch-pill", "Today"); tdy.onclick = function () { V.day = tk; C.rerender(); };
    var next = el("button", "sch-ib"); next.title = "Next week"; next.appendChild(svg("right")); next.onclick = function () { V.day = addDays(k, 7); C.rerender(); };
    tools.appendChild(prev); tools.appendChild(tdy); tools.appendChild(next);
    top.appendChild(tools);
    root.appendChild(top);

    // week strip
    var strip = el("div", "sch-week"), mon = mondayOf(k);
    for (var i = 0; i < 7; i++) (function (dk) {
      var dd = pk(dk), b = el("button", "sch-day" + (dk === k ? " sel" : "") + (dk === tk ? " today" : ""));
      b.appendChild(el("span", "wd", dd.toLocaleDateString(undefined, { weekday: "short" }).slice(0, 3)));
      b.appendChild(el("span", "dn", String(dd.getDate())));
      var dots = el("span", "dots"), its = itemsOn(dk);
      its.slice(0, 3).forEach(function (it) { var c = el("i"); c.style.background = it.color; c.appendChild(svg(it.icon)); dots.appendChild(c); });
      if (its.length > 3) dots.appendChild(el("em", null, "+" + (its.length - 3)));
      b.appendChild(dots);
      b.onclick = function () { V.day = dk; C.rerender(); };
      strip.appendChild(b);
    })(addDays(mon, i));
    root.appendChild(strip);

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

    // timeline
    var tl = el("div", "sch-tl"), now = nowMin(), isToday = k === tk, nowPlaced = !isToday;
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

    var r2 = el("div", "setrow");
    var l2 = el("div", "sl"); l2.appendChild(el("b", null, "Import a calendar"));
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
    var l3 = el("div", "sl"); l3.appendChild(el("b", null, "Send to your phone's calendar"));
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
    V.edit = { draft: dr, occ: k, isNew: !it, iconsOpen: !it };
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
    ti.oninput = function () { dr.title = ti.value; };
    ti.onkeydown = function (e) { if (e.key === "Enter") saveEdit(); };
    hm0.appendChild(ti);
    hd.appendChild(hm0);
    var cl = el("button", "sch-ib light"); cl.title = "Close"; cl.appendChild(svg("x")); cl.onclick = closeEditor; hd.appendChild(cl);
    sh.appendChild(hd);
    if (E.isNew) setTimeout(function () { ti.focus(); }, 30);

    var bd = el("div", "sch-ebody");

    // icons + colours
    if (E.iconsOpen) {
      var ig = el("div", "sch-card");
      var cols = el("div", "sch-colors");
      COLORS.forEach(function (c) { var b = el("button", "sch-sw" + (dr.color === c ? " on" : "")); b.style.background = c; b.setAttribute("aria-label", "Colour " + c);
        b.onclick = function () { dr.color = c; dr.title = ti.value; C.rerender(); }; cols.appendChild(b); });
      ig.appendChild(cols);
      var icons = el("div", "sch-icons");
      PICK.forEach(function (n) { var b = el("button", "sch-icb" + (dr.icon === n ? " on" : "")); b.title = n; b.appendChild(svg(n));
        if (dr.icon === n) b.style.background = dr.color;
        b.onclick = function () { dr.icon = n; dr.title = ti.value; C.rerender(); }; icons.appendChild(b); });
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
    var rs = el("select"); rs.setAttribute("aria-label", "Repeat");
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

    if (dr.repeat && dr.repeat.type !== "none" && !E.isNew) bd.appendChild(el("p", "meta", "Changes apply to every repeat of this task."));

    // footer
    var ft = el("div", "sch-foot");
    if (!E.isNew) {
      var orig = s.items.find(function (x) { return x.id === dr.id; });
      if (orig && orig.repeat && orig.repeat.type !== "none") {
        var d1 = el("button", "ghost danger", "Delete this day only");
        d1.onclick = function () { orig.skip = orig.skip || {}; orig.skip[E.occ] = true; C.save(); closeEditor(); };
        ft.appendChild(d1);
      }
      var d2 = el("button", "ghost danger"), armed = false; d2.appendChild(svg("trash")); d2.appendChild(document.createTextNode(orig && orig.repeat && orig.repeat.type !== "none" ? "Delete all" : "Delete"));
      d2.onclick = function () { if (!armed) { armed = true; d2.lastChild.textContent = "Press again"; return; } s.items = s.items.filter(function (x) { return x.id !== dr.id; }); C.save(); closeEditor(); };
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
    if (dr.allDay) { dr.start = null; dr.dur = 0; }
    if (E.isNew) { dr.id = uid(); s.items.push(dr); }
    else { var i = s.items.findIndex(function (x) { return x.id === dr.id; }); if (i >= 0) s.items[i] = dr; }
    V.day = E.isNew ? dr.date : V.day;
    C.save(); V.edit = null; C.rerender();
  }

  // ---------- public ----------
  window.DetoxSchedule = {
    init: function (ctx) { C = ctx; S(); setInterval(checkReminders, 20000); setTimeout(checkReminders, 1500); },
    render: function (app) { render(app); },
    today: function () { var k = today(), its = itemsOn(k), now = nowMin();
      var left = its.filter(function (it) { return !isDone(it, k); }).length;
      var nxt = its.filter(function (it) { return !it.allDay && it.start && hm(it.start) >= now && !isDone(it, k); })[0];
      return { total: its.length, left: left, next: nxt ? fmtT(hm(nxt.start)) + " · " + nxt.title : null }; },
    addFromTodo: function (title, dateKey) {
      var n = nowMin(), k = dateKey || today();
      V.day = k;
      openEditor(null, k, k === today() ? Math.ceil((n + 1) / 30) * 30 : 9 * 60);
      V.edit.draft.title = title; V.edit.draft.icon = "list";
    },
    icon: svg
  };
})();
