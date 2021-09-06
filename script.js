function chooseColor() {
    var btnList = ["violet", "indigo", "blue", "green", "yellow", "orange", "red", "pink", "brown"];
    var randColor = [];

    var randNum = Math.floor(Math.random()*9);
    return randColor.push(btnList[randNum]);
}//choose color

for (var i = 0; i < 9; i ++) {
    if (document.querySelectorAll("button")[i].value() == randColor) {
        document.querySelectorAll("button")[i].classList.add("pressed");
        setTimeout(document.querySelectorAll("button")[i].classList.remove("pressed"), 200);
        
    }
    
}











var pressedBtnArray = [];
var buttonArray = document.querySelectorAll("button");
for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click",function(){
        pressedBtnArray.push(this.value);
        console.log(pressedBtnArray)
    });
}//gives the array of pressed buttons

