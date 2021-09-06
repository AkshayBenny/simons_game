//Generate pattern

function chooseColor {
    var btnList = ["violet", "indigo", "blue","green", "yellow", "orange", "red", "pink", "brown"];
    var randColor = [];

    var randNum = Math.ceil(Math.random()*9);
    randColor = btnList[randNum];
    


}












var pressedBtnArray = [];
var buttonArray = document.querySelectorAll("button");
for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click",function(){
        pressedBtnArray.push(this.value);
        console.log(pressedBtnArray)
    });
}//gives the array of pressed buttons

