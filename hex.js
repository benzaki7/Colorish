const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
let color = document.querySelector(".color");
let backgroundColor = document.querySelector(".container");
const alertBox = document.querySelector(".alertBox");
let input = document.getElementById('copyFrom');

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    };
    backgroundColor.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
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