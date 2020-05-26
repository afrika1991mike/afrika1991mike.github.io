
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let dateNum = date.getDate();
let dayNum = date.getDay();

let day;
for (let i = 0; i < days.length - 1; i++) {
    if (i == dayNum) {
        day = days[i];
    }
}
document.getElementById("scripts").innerHTML = day + ", " + dateNum + " " + months[month] + " " + year + ".";


if(day=="Friday"){
    let div=document.getElementById("event");
    div.style.display="block";

}


function toggleMenu(){
    document.getElementsByClassName("clearfix")[0].classList.toggle("dropdown")
}x