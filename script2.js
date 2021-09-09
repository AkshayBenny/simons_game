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
  }