/**
 * Created by Пользователь on 16.09.2016.
 */
var numberOfFaces = 5;
var count = 0;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];


function generateFaces() {
    for (var i = 0; i < numberOfFaces; i++){
        var image = document.createElement("img");
        image.setAttribute("src", "img/Awesome.svg");
        image.setAttribute("width", "100px");
        var top = Math.floor(Math.random() * 395);
        var left = Math.floor(Math.random() * 395);
        image.style.top = top + "px";
        image.style.left = left + "px";
        theLeftSide.appendChild(image);
    }
    theLeftSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        while (theLeftSide.firstChild){
            theLeftSide.removeChild(theLeftSide.firstChild);
        }
        while (theRightSide.firstChild){
            theRightSide.removeChild(theRightSide.firstChild);
        }
        numberOfFaces += 5;
        count += 10;
        generateFaces();
        cloneLeftSide();
    };
}
generateFaces();


function cloneLeftSide() {
    var leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
//тут можно указать какой элемент удалить.
//В данном случае удаляется последний элемент родителя. Однако, можно уазать так:
//leftSideImages.childNodes[3]
//где 3 - третий элемент родителя. Соответственно, для усложнения игры, данное число можно установить
//рандомно => лишний smile.png может быть не только на переднем плане, но и находится ниже или выше
// по уровню относительно других smile.png. Однако тогда инкремент следует уменьшить, т.к. поле быстро
// заполняется с каждым уровнем.
    theRightSide.appendChild(leftSideImages);
}
cloneLeftSide();


theBody.onclick = function gameOver() {
    alert("Game over\n" + "You score: " + count);
    theBody.onclick = null;
    theLeftSide.lastChild.onclick = null;
    document.location.reload(); // reload the game in case of wrong choice (will execute after alert message)
};