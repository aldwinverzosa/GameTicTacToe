function myFunction() {
  let text;
  let person = prompt("Please enter your name:", "Enter Name Here");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = text;
}

const gameState = {
  currentPlayer: "x",
  player1: "x",
  player2: "o",
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};

let cell01 = document.getElementById("0,0");
let cell02 = document.getElementById("0,1");
let cell03 = document.getElementById("0,2");
let cell04 = document.getElementById("1,0");
let cell05 = document.getElementById("1,1");
let cell06 = document.getElementById("1,2");
let cell07 = document.getElementById("2,0");
let cell08 = document.getElementById("2,1");
let cell09 = document.getElementById("2,2");

function actionX(event) {
  if (event.target.innerHTML === "") {
    if (gameState.currentPlayer === gameState.player1) {
      event.target.innerHTML = "X";
      event.target.style.fontSize = "60px";
      gameState.currentPlayer = gameState.player2;
      let indexRow = event.target.id.slice(0, 1);
      let indexCol = event.target.id.slice(2, 3);
      // console.log(indexRow)
      // console.log(indexCol)
    

      // gameState.board.push(indexRow);
      gameState.board[indexRow][indexCol] = 'x'

      console.log(gameState.board);
    } else if (gameState.currentPlayer === gameState.player2) {
      event.target.innerHTML = "O";
      event.target.style.fontSize = "60px";
      gameState.currentPlayer = gameState.player1;
      // newArr.push(event.target.id)
      // console.log(newArr)
      // gameState.board.push(event.target.id);
      let indexRow = event.target.id.slice(0, 1);
      let indexCol = event.target.id.slice(2, 3);
      // console.log(indexRow)
      // console.log(indexCol)
      gameState.board[indexRow][indexCol] = 'o'

      console.log(gameState.board);
    }
  } else if (event.target.innerHTML !== "") {
    return;
  }
}

cell01.addEventListener("click", actionX);
cell02.addEventListener("click", actionX);
cell03.addEventListener("click", actionX);
cell04.addEventListener("click", actionX);
cell05.addEventListener("click", actionX);
cell06.addEventListener("click", actionX);
cell07.addEventListener("click", actionX);
cell08.addEventListener("click", actionX);
cell09.addEventListener("click", actionX);

//get random numbers 0 or 1
// let randomNumber = Math.floor(Math.random() * 2);
