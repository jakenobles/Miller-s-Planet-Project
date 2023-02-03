function get_time() {
    // finds the time elapsed between the set date and now and scales that to the time dilation of 1 hour to 7 years

    const millerlanding = new Date(2014, 9, 26, 0, 0, 0);
    
    const currenttime = new Date();

    // remember that this is in units of milliseconds
    const time_passed = currenttime - millerlanding;

    const seconds_passed = time_passed / 1000;

    const scaled_time = seconds_passed * 0.163e-4;

    return scaled_time;
}

function sort_time_data() {


    let days = divmod(get_time(), 86400);
    let hours   = divmod(days[1], 3600);
    let minutes = divmod(hours[1], 60);
    let seconds = divmod(minutes[1], 1);
    let milliseconds = divmod(seconds[1], .001);

    document.getElementById("test1").innerHTML = days[0] + ' Days, ' + hours[0] + ' Hours, ' 
    + minutes[0] + ' Minutes, ' + seconds[0] + ' Seconds and ' + milliseconds[0] + ' Milliseconds';
}

function divmod(x, y){
    //Writing my own divmod function like exists in python.
    let div1 = Math.floor(x/y);
    let div2 = x%y;
    const divmodarray = [div1, div2];
    return divmodarray;
}

function looper() {
    setInterval(sort_time_data, 500);
}