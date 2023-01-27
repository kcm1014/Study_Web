/*
window.onload = function(){
    var menu2 = document.getElementById("menu2");
    var liList = menu2.getElementsByTagName("li");

    for(let i=0;i<liList.length;i++){
        liList[i].style.color = "#f00";
    }
}
*/

$(document).ready(function(){
    let li = $("#menu2 li");
    li.css("color","#f00");
})