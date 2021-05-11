var submit = document.getElementById("item");
// create list
document.getElementById("addForm").addEventListener("submit", function (e) {
    console.log(submit);
    e.preventDefault();
    let li = document.createElement('li');
    li.textContent = submit.value;
    li.classList.add("list-group-item");
    var lists = document.querySelector("#items");
    lists.appendChild(li);
    let button = document.createElement('button');
    button.textContent = "x";
    button.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right', 'delete');
    li.appendChild(button);
});
// search item
document.getElementById("filter").addEventListener("keyup", function (e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        alert(filter.value);
    }
});
//delete
// document.getElementsByClassName("delete")[1].addEventListener("click", function (e) {

//     // var itemList = document.getElementById("items");
//     var del = document.querySelector(".list-group-item");
//     del.remove();

//     // var li = e.target.closest('li');
//     // var nodes = Array.from( li.closest('ul').children );
//     // var index = nodes.indexOf( li );
//     // console.log(index);


// });

var list = document.querySelectorAll(".list-group-item");
for (var index = 0; index < list.length; index++) {
    list[index].querySelector(".delete").addEventListener("click",
        function () {
            this.closest(".list-group-item").remove();
        });
}