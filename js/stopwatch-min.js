function Stopwatch(t) {
  var n,
    i,
    s = 0;
  function e() {
    var n,
      e,
      o = (function (t) {
        var n = new Date(t),
          i = n.getMinutes().toString(),
          s = n.getSeconds().toString(),
          e = n.getMilliseconds().toString();
        i.length < 2 && (i = "0" + i);
        s.length < 2 && (s = "0" + s);
        for (; e.length < 3; ) e = "0" + e;
        return i + ":" + s + "." + e;
      })((s += ((n = Date.now()), (e = n - i), (i = n), e)));
    t.textContent = o;
  }
  (this.isOn = !1),
    (this.start = function () {
      this.isOn ||
        ((n = setInterval(e, 10)), (i = Date.now()), (this.isOn = !0));
    }),
    (this.stop = function () {
      this.isOn && (clearInterval(n), (n = null), (this.isOn = !1));
    }),
    (this.reset = function () {
      (s = 0), (this.isOn = !1);
    }),
    (this.isOn = !1);
}