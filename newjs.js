let btnSubtract = document.querySelector(".counter__button--minus");
let btnAdd = document.querySelector(".counter__button--plus");
let number = document.querySelector(".counter__button--count");

btnSubtract.style.cursor="pointer";
btnAdd.style.cursor="pointer";

btnAdd.addEventListener("click", add() =>{
    number.value = parseInt(number.value) + 1;
});

btnSubtract.addEventListener("click", minus() =>{
    if (number.value >= 1){
        number.value = parseInt(number.value) - 1;
    } else {
        number.value = parseInt(number.value);
    }
});

console.log(number);
alert(number);