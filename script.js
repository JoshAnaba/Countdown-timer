
// set the date we're counting down to[14 days]

var month = parseFloat(new Date().getMonth());

var months =['Jan' ,'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

var todaysDate = parseFloat(new Date().getDate())
var currentYear = parseFloat(new Date().getFullYear())

var currentHour= parseFloat(new Date().getHours())
var countdownDate= new Date(`${months[month]} ${todaysDate+14}, ${currentYear} ${currentHour}:00:00`).getTime();

// update the count down every 1 second

const x = setInterval(()=>{

    const now = new Date().getTime();

    // distance between now and the countdown date

    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds


    const days = Math.floor(distance/(1000 *60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // output the result to their respective elements

    document.getElementById('days').innerHTML = days;

    document.getElementById('hours').innerHTML = hours;

    document.getElementById('minutes').innerHTML = minutes;

    document.getElementById('seconds').innerHTML = seconds;

    // reset the counter to 14 days

    if(distance< 0){
        countdownDate = new Date(`${months[month]} ${todaysDate+14}, ${currentYear} ${currentHour}:00:00`).getTime()
    }
}, 1000)
