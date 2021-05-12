function assignGrade(score){
    var score;
    var grade;

    if(score <= 2){
        grade = 'F';
    }
    
    if(score > 2){
        grade = 'E';
    }

    if(score >= 5){
        grade = 'D';
    }
    if(score >= 7){
        grade = 'C';
    }
    if(score >= 9){
        grade = 'B';
    }
    if(score > 10){
        grade = 'A';
    }

    return grade;

    alert('$(grade)')
}

// DOM Manipulation

//Getting all elements by ID

console.log(document.getElementById("language"));
console.log(document.getElementById("currency"));

//Get all elements by ClassName

console.log(document.getElementsByClassName("profile"));

//Query Selector

console.log(document.querySelector("#language"));
console.log(document.querySelector(".session_details"));
console.log(document.querySelectorAll("h2"));

//Changing CSS propert of target DOM

console.log(document.getElementById("language").style.background="lightgray");

//Creating HTML Tag using JS DOM

let body = document.createElement('section');
console.log(body);
let h2 = document.createElement('h2');
console.log(h2);
h2.textContent = "New H2!";
console.log(h2);
document.body.appendChild(h2);

let ul = document.createElement('ul');
console.log(ul);
ul.textContent = "Sitemap";

li = document.createElement('li');
li.textContent = "About us";
const menu = document.querySelector(".footer");
menu.appendChild;

let footer = document.querySelector(".footer");
footer.appendChild(li);

document.getElementById("circle__blue").addEventListener("click", 
function(){

    document.style.background="blue";

});

document.getElementById("circle__red").addEventListener("click", 
function(){

    document.style.background="red";

});