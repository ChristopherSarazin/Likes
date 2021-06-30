var likecountA = 0;
var likecountB = 0;
var likecountC = 0;

function increaseLikesA(){
    likecountA++
    var element = document.getElementById("likecountA");
    element.innerText = likecountA;
}
function increaseLikesB(){
    likecountB++
    var element = document.getElementById("likecountB");
    element.innerText = likecountB;
}
function increaseLikesC(){
    likecountC++
    var element = document.getElementById("likecountC");
    element.innerText = likecountC;
}