//first 
document.getElementById("one").innerText="This is a div";

document.getElementById("two").innerText="This is a <div>";

//second

document.getElementById("one").style.border="1px solid red";

document.getElementById("two").style.backgroundColor="lightblue";

document.getElementById("three").className="coral";

//third

let span = document.createElement('span');
span.textContent = "span";
var divOne = document.querySelector("#one");
divOne.appendChild(span);

let a = document.createElement('a');
var linkText = document.createTextNode("link");
a.appendChild(linkText);
a.title = "link";
a.href = "http://uc.pt";
var divTwo = document.querySelector("#two");
divTwo.appendChild(a);

var divThree = document.querySelector("#three span");
divThree.remove();

//fourth

document.getElementById("one").addEventListener("click", function() {
  document.getElementById("one").style.left = "200px";
});

const two = document.getElementById('two');

two.addEventListener('mouseenter', e => {
  two.style.backgroundColor="red";
});

two.addEventListener('mouseleave', e => {
 two.style.backgroundColor="lightblue";
});

//fifth
let count = 1;

setInterval(function() {
  if(count < 20){
    let div = document.createElement("div");
    div.innerText = "created div";
    document.body.appendChild(div);
  }
  count++;
},1);