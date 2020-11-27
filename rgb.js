const btn = document.getElementById("btn");
let color = document.querySelector(".color");
let backgroundColor = document.querySelector(".container");
const alertBox = document.querySelector(".alertBox");
let input = document.getElementById('copyFrom');

function getRandomNumber() {
    return Math.round(Math.random() * 255);
}

btn.addEventListener("click", function() {
    rgbColor = "rgb(" + getRandomNumber() + ", " + getRandomNumber() + ", " + getRandomNumber() + ")";
    backgroundColor.style.backgroundColor = rgbColor;
    color.innerHTML = rgbColor;
})

color.addEventListener("click", function() {    
    input.value = color.innerHTML;
    input.select();
    input.setSelectionRange(0,99999);
    document.execCommand("copy");
        
    alertBox.classList.toggle("active");
    alertBox.innerHTML = "COPIED!";
    setTimeout(function() {
        alertBox.classList.toggle("active")
    }, 700);
});