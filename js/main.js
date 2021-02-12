// First need to cache the ids and get all the elements we 
// want to use: timer,toggle, and reset

var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');
//create watch object
var watch = new Stopwatch();

//add a click listener for toggle button, so that when we click will get function
toggleBtn.addEventListener('click', function() {
    //if watch on then stop, else start
    if (watch.isOn) {
        watch.stop();
    } else {
        watch.start();
    }
});

resetBtn.addEventListener('click', function() {
    //reset stop watch
    watch.reset();
});
