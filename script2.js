var levelCounter = 0

function btnColorGenerator() {
    var randColor
    const btnColors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 'pink', 'brown']
    var randNum = Math.floor(Math.random()*9)
    return randColor = btnColors[randNum] 
  }
  
var returnColor = btnColorGenerator()
const btnArray = document.querySelectorAll('button')
for (var i=0; i<btnArray.length; i++){
    if (btnArray[i].value == returnColor){
        btnArray[i].classList.add("pressed")
    }
}//Highlights a random button

var shownBtnArray = []
shownBtnArray.push(returnColor)

function pressedBtn() {
	for (var j=0; j<btnArray.length; j++){
  	  document.querySelectorAll("button")[j].addEventListener("click", function () {
      	return this.value
        })
  }
}
var pressedBtnArray = []
pressedBtnArray.push(pressedBtn())
console.log(pressedBtnArray)



