let btnSubtract = document.querySelector(".counter__button--minus");
let btnAdd = document.querySelector(".counter__button--plus");
let number = document.querySelector(".counter__button--count");

btnAdd.addEventListener('click', () =>{
    number.value = parseInt(number.value) + 1;
});

btnSubtract.addEventListener('click', () =>{
    if (number.value >= 1){
        number.value = parseInt(number.value) - 1;
    } else {
        number.value = parseInt(number.value);
    }
});