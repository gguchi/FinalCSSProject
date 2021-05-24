let btnSubtract = document.querySelector(".counter__button--minus");
let btnAdd = document.querySelector(".counter__button--plus");
let number = document.querySelector(".counter__button--count");
let totalCost = document.querySelector(".cost");
let price = document.querySelector(".product__details--price-discounted").innerHTML;

btnAdd.addEventListener('click', () =>{
    number.value = parseInt(number.value) + 1;

    console.log(number.value);

    totalCost.innerHTML = parseInt(price.value * number.value);
});

btnSubtract.addEventListener('click', () =>{
    if (number.value >= 1){
        number.value = parseInt(number.value) - 1;
    } else {
        number.value = parseInt(number.value);
    }
});

