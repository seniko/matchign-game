/**
 * Created by Пользователь on 16.09.2016.
 */
var numberOfFaces = 5;
var leftSide = document.getElementById("leftSide");

function generateFaces() {

    for (var i = 0; i < numberOfFaces; i++){
        var image = document.createElement("img");
        image.setAttribute("src", "img/smile.png");
        var top = Math.floor(Math.random() * 400);
        var left = Math.floor(Math.random() * 400);
        image.style.top = top + "px";
        image.style.left = left + "px";
        leftSide.appendChild(image);
    }
}
generateFaces();
