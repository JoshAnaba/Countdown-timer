
// set the date we're counting down to
const  countdownDate = new Date("Jan 23, 2021 23:07:0").getTime();


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

    // if(distance< 0){
    //     Set
    // }
}, 1000)
