

function discountCountdown() {
    const lastDate = new Date("September 21, 2025 23:55");
    const now  = new Date()
    const diff = lastDate - now;
    


const  msInSecond = 1000;
const msInMinute = 60 * 1000;
const msInHour = 60 * 60 * 1000;
const msInDay = 24 *60 * 60 * 1000;

const displayDay = Math.floor(diff/msInDay);
document.querySelector(".days").textContent = displayDay;

const displayHour = Math.floor((diff%msInDay)/msInHour);
document.querySelector(".hours").textContent = displayHour;

const displayMinute = Math.floor((diff%msInHour) / msInMinute);
document.querySelector(".minutes").textContent = displayMinute;

const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
document.querySelector(".seconds").textContent = displaySecond;

if (diff <= 0 ) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID);
    noDiscount();

}
}

let timerID = setInterval(discountCountdown, 1000);

function noDiscount() {
    const heading = document.querySelector(".timerH");
    heading.textContent = "PROMOTION ENDED!";
    heading.classList.add("red");
}



gsap.from(".letterO", {x: -10,  ease: "power.in", duration: 1, delay: 3, opacity: 0})
gsap.from(".letterR", {y: 10, ease: "power.in", duration: 1, delay: 2.6, opacity: 0})
gsap.from(".letterT", {y: -30, ease: "power.in" ,duration: 1, delay: 2.2, opacity: 0})
gsap.from(".letterS", {y: 10, ease: "power.in", duration: 1, delay: 1.8, opacity: 0})
gsap.from(".letterI", {y: -30, ease: "power.in", duration: 1, delay: 1.4, opacity: 0})
gsap.from(".letterB", {x: -40, ease: "power.in", duration: 1, delay: 1, opacity: 0})



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtnUp").style.display = "block";
    } else {
        document.getElementById("myBtnUp").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}