let timer = document.getElementById("timer"),
  toggleBtn = document.getElementById("toggle"),
  resetBtn = document.getElementById("reset"),
  watch = new Stopwatch(timer),
  startbtn = $(".start"),
  stopbtn = $(".stop"),
  resetbtn = $(".reset"),
  n = 0,
  list = [];
function getLaps() {
  $(".laps").empty(),
    window.localStorage.getItem("laps") &&
      (list = JSON.parse(window.localStorage.getItem("laps")));
  for (let t = 0; t < list.length; t++) {
    let e = list[t],
      n = `<li style="font-family: 'Major Mono Display', monospace !important; class="list-group-item">Lap-${
        t + 1
      } <strong>${Object.values(e)[0]}</strong></li>`;
    $(".laps").append(n);
  }
}
$(document).ready(function () {
  getLaps();
}),
  startbtn.on("click", function () {
    watch.start(),
      startbtn.toggle(),
      stopbtn.toggle(),
      "00:00.000" !== timer.innerText && resetbtn.toggle();
  }),
  stopbtn
    .on("click", function () {
      watch.stop(), startbtn.toggle(), stopbtn.toggle(), resetbtn.toggle(), n++;
      let t = {};
      (t[n] = timer.innerText),
        list.push(t),
        window.localStorage.setItem("laps", JSON.stringify(list)),
        getLaps();
    })
    .hide(),
  resetbtn
    .on("click", function () {
      (timer.innerText = "00:00.000"),
        watch.reset(),
        resetbtn.toggle(),
        (list = []),
        window.localStorage.setItem("laps", JSON.stringify(list)),
        $(".laps").empty();
    })
    .hide();
