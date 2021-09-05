pressedBtnArray = [];
var buttonArray = document.querySelectorAll("button");
for (var i = 0; i < buttonArray.length; i++) {
    buttonArray[i].addEventListener("click",function(){
        pressedBtnArray.push(this);
    });
}

