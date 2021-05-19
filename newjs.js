let btnSubtract = document.querySelector(".counter__button--minus");
let btnAdd = document.querySelector(".counter__button--plus");
let number = document.querySelector(".counter__button--counter");

btnSubtract.style.cursor = "pointer";
btnAdd.style.cursor = "pointer";

btnAdd.addEventListener("click", () => {
    number.value = parseInt(number.value) + 1;
});

btnSubtract.addEventListener("click", () =>{
    if (number.value >= 1){
        number.value = parseInt(number.value) - 1;
    } else {
        number.value = parseInt(number.value);
    }
});

// ---------------------- COLOR CHANGES

let btnPink = document.querySelector(".circle__pink");
let btnRed = document.getElementsByClassName(".circle__red");
let btnBlack = document.getElementsByClassName(".circle__black");
let btnWhite = document.getElementsByClassName(".circle__white");
let btnBrown = document.getElementsByClassName(".circle__brown");

btnPink.addEventListener("click", () => {

    document.getElementsByClassName(".pic").src="images/beats_4.png";
    alert("alert");

});

