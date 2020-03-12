document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  let moveButton = document.getElementById("move-button")
  let ul = document.getElementById('moves-container')
  

  document.addEventListener("keydown", function(event){
    let keyPressed = event.key
    let li = document.createElement('li')
    if (keyPressed === "ArrowUp"){
      li.innerText = "Up"
      ul.append(li)
    } if (keyPressed === "ArrowLeft"){
      li.innerText = "Left"
      ul.append(li)
    } if (keyPressed === "ArrowRight") {
      li.innerText = "Right"
      ul.append(li)
    } if (keyPressed === "ArrowDown") {
      li.innerText = "Down"
      ul.append(li)
    } if (keyPressed === "Backspace") {
      let recentCommand = ul.lastChild
      recentCommand.remove()
    }
    
  })

  moveButton.addEventListener("click", function(event){
    let listOfMoves = ul.children
    Array.from(listOfMoves).forEach(command => {
    let firstMove = command.innerText
    if (firstMove === "Up") {
      move("up")
    }
    if (firstMove === "Down") {
      move("down")
    }
    if (firstMove === "Left") {
      move("left")
    }
    if (firstMove === "Right") {
      move("right")
    }
    command.remove()
  })
  })
})
