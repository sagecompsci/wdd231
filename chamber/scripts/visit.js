let currentDate = new Date();
let visitDate = localStorage.getItem("visitDate");


const visit = document.querySelector("#visit");

console.log(visitDate);
let text;

if (visitDate === null) {
    text = "Welcome! Let us know if you have any questions!";
    console.log("testing");
}

else {
    let dateDiff = currentDate.getDate() - visitDate.getDate();
    if (dateDiff < 1) {
        text = "Back so soon! Awesome!";
    }
    else if(1 <= dateDiff < 2){
        text = `You last visited ${dateDiff} days ago`;
    }
}

visit.textContent = `${text}`;
console.log("testing page load");

localStorage.setItem("visitDate", `${currentDate}`);