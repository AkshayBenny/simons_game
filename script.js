document.addEventListener("keypress", function(){
    var level = 1;
var n = 2;


while (level < n) {
    //choose color
    function chooseColor() {
        var btnList = ["violet", "indigo", "blue", "green", "yellow", "orange", "red", "pink", "brown"];
        var randColor = [];

        var randNum = Math.floor(Math.random()*9);
        return randColor.push(btnList[randNum]);
    }

    //Animate chosen buttons
    $("button[value = randColor[level]]").classList.add("pressed");
    setTimeout(function () {
        $("button[value = randColor[level]]").classList.remove("pressed");
    }, 200);


    //get the array of pressed buttons
    function getPressedButtons() {
        var pressedBtnArray = [];
        var buttonArray = document.querySelectorAll("button");

        for (var i = 0; i < buttonArray.length; i++) {
            buttonArray[i].addEventListener("click",function(){
                pressedBtnArray.push(this.value);
                
                document.querySelectorAll[i].classList.add("pressed");
                setTimeout(function () {
                    document.querySelectorAll[i].classList.remove("pressed");
                }, 200);
                        });
        }
        return pressedBtnArray;
    }


    //compare the selected buttons
    for (var j = 0; j < randColor.length; j++) {
        if (randColor[j] == pressedBtnArray[j]){
            n++;
            level++;

        } else {
            randColor = [];
            pressedBtnArray = [];
            n = 2;
            level = 1;
            document.querySelector("body").style.backgroundColor = "red";
        }
    }
    randColor = [];
        
}

});




