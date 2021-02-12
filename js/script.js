
// Constructor Function():is a function we use to create an OBJECT
// Stopwatch() : this is the function we will be working with
function Stopwatch() {
    // The time is the current time in milliseconds(will format later)
    var time;
    //
    var interval;
    var offset;

    //Add a value set to false; will be if stopwatch isnt currently running
    this.isOn= false;
    //first added start function
    this.start= function() {};
    // then will need to add stop, reset, 
    this.stop= function() {};
    this.reset= function() {};
}
// thru new operator using 'new' Keyword- anything that happens to 'this' above
var watch = new Stopwatch();
watch.start();


