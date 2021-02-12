
// Constructor Function():is a function we use to create an OBJECT
// Stopwatch() : this is the function we will be working with
function Stopwatch(elem) {
    
    // Create Private Variables:
    // The time is the current time in milliseconds(will format later)
    var time = 0;
    // Interval variable is when hit start it will run update function
    // and need to save for stop function
    var interval;
    // offset variable: going to set this variable to date.now to calculate how much time has passed
    var offset;


    //Now add private functions
    //Update is what the interval will constantly keep going
    function update() {
        //whatever is add to delta will be added to the time
        time += delta();
        var formattedTime = timeFormatter(time);
        //added this last , when added 'elem' to Stopwatchfunction- 
        //?? still confused on how to know 'elem' in function &
        // and elem.textContent - ??? not sure how we knew how to do th
        elem.textContent = formattedTime;
    }

    //delta is to calculate how much time has passed
    function delta() {
        // get date right now
        var now = Date.now();
        //get time passed by subtracting offset from now(we get from below this.start function) 
        var timePassed = now - offset;
        // added this so that the next time the function is run it starts at correct spot
        offset = now;
        // Difference is returned as timePassed variable
        return timePassed;
    }

    //timeFor is to convert from milliseconds
    function timeFormatter(timeInMilliseconds) {
        // created date object to pass in that value and add '.toString();' to get length to each
        var time = new Date(timeInMilliseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var milliseconds = time.getMilliseconds().toString();
         // to ensure number of characters matches formatting
        if (minutes.length < 2 ) {
            minutes = '0' + minutes;
        }
         // to ensure number of characters matches formatting
        if (seconds.length < 2 ) {
            seconds = '0' + seconds;
        }
        // to ensure number of characters matches formatting
        while (milliseconds.length < 3 ) {
            milliseconds = '0' + milliseconds;
        }
        //return the formatting to match display
        return minutes + ' : ' + seconds + ' . ' + milliseconds;
    }
 


    //Add a value set to false; will be if stopwatch isnt currently running
    this.isOn= false;

    //first added start function- this functions
    this.start= function() {
        if (!this.isOn) {
            interval = setInterval(update, 10);
            offset = Date.now();
            this.isOn = true;
        }
    };
    // Also add stop and reset private functions, 
    // 
    this.stop= function() {
        if (this.isOn) {
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };
    this.reset= function() {
        time = 0; 
        this.isOn = false;
    };

       //Add a value set to false; will be if stopwatch isnt currently running
       this.isOn= false;
}

var watch = new Stopwatch();
// thru new operator using 'new' Keyword- anything that happens to 'this' above
// var watch = new Stopwatch();
//  watch.start();


