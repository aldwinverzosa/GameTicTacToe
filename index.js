let cell01 = document.getElementById("0,0");
let cell02 = document.getElementById("0,1");
let cell03 = document.getElementById("0,2");
let cell04 = document.getElementById("1,0");
let cell05 = document.getElementById("1,1");
let cell06 = document.getElementById("1,2");
let cell07 = document.getElementById("2,0");
let cell08 = document.getElementById("2,1");
let cell09 = document.getElementById("2,2");

cell01.addEventListener("click", actionX);
cell02.addEventListener("click", actionX);
cell03.addEventListener("click", actionX);
cell04.addEventListener("click", actionX);
cell05.addEventListener("click", actionX);
cell06.addEventListener("click", actionX);
cell07.addEventListener("click", actionX);
cell08.addEventListener("click", actionX);
cell09.addEventListener("click", actionX);

let count = 0;
let isGameOver = false;

const gameState = {
  count: 0,
  currentPlayer: "x",
  player1: "x",
  player2: "o",
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};


function actionX(event) {
  if (event.target.innerHTML === "") {
    if (gameState.currentPlayer === gameState.player1) {
      event.target.innerHTML = "X";
      event.target.style.fontSize = "60px";
      let indexRow = event.target.id.slice(0, 1);
      let indexCol = event.target.id.slice(2, 3);
      // gameState.board.push(indexRow);
      gameState.board[indexRow][indexCol] = "x";
      XcheckWinnerRow();
      // OcheckWinnerRow();
      XcheckWinnersColumn();
      // OcheckWinnersColumn();
      xDiagonals();
      count++;
      if (count === 9 && !isGameOver) {
        setTimeout(function () {
          alert("DRAW");
        }, 1);
      }
      gameState.currentPlayer = gameState.player2;
    } else if (gameState.currentPlayer === gameState.player2) {
      event.target.innerHTML = "O";
      event.target.style.fontSize = "60px";

      let indexRow = event.target.id.slice(0, 1);
      let indexCol = event.target.id.slice(2, 3);

      gameState.board[indexRow][indexCol] = "o";

      OcheckWinnerRow();
      OcheckWinnersColumn();
      oDiagonals();
      gameState.currentPlayer = gameState.player1;

      count++;
      if (count === 9 && !isGameOver) {
        setTimeout(function () {
          alert("DRAW");
        }, 1);
      }
    }
  } else if (event.target.innerHTML !== "") {
    return;
  }
}




const addBackEventListeners = () => {
  cell01.addEventListener("click", actionX);
  cell02.addEventListener("click", actionX);
  cell03.addEventListener("click", actionX);
  cell04.addEventListener("click", actionX);
  cell05.addEventListener("click", actionX);
  cell06.addEventListener("click", actionX);
  cell07.addEventListener("click", actionX);
  cell08.addEventListener("click", actionX);
  cell09.addEventListener("click", actionX);
};

const startGame = () => {
  let firstPlayer = prompt("Enter X player name:", "Enter Your Name");
  let secondPlayer = prompt("Enter O Computer Name:", "Enter Your Name");

  document.getElementById("player1").innerHTML = firstPlayer;

  document.getElementById("player2").innerHTML = secondPlayer;

  resetGame();
};

const endGame = () => {
  cell01.removeEventListener("click", actionX);
  cell02.removeEventListener("click", actionX);
  cell03.removeEventListener("click", actionX);
  cell04.removeEventListener("click", actionX);
  cell05.removeEventListener("click", actionX);
  cell06.removeEventListener("click", actionX);
  cell07.removeEventListener("click", actionX);
  cell08.removeEventListener("click", actionX);
  cell09.removeEventListener("click", actionX);
  isGameOver = true;
};

const resetGame = () => {
  (gameState.currentPlayer = "x"),
    (gameState.player1 = "x"),
    (gameState.player2 = "o"),
    (cell01.innerHTML = "");
  cell02.innerHTML = "";
  cell03.innerHTML = "";
  cell04.innerHTML = "";
  cell05.innerHTML = "";
  cell06.innerHTML = "";
  cell07.innerHTML = "";
  cell08.innerHTML = "";
  cell09.innerHTML = "";
  gameState.board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  addBackEventListeners();
  count = 0;
  isGameOver = false;
};

//checks player 1 rows
const XcheckWinnerRow = () => {
  if (
    gameState.board[0][0] === "x" &&
    gameState.board[0][1] === "x" &&
    gameState.board[0][2] === "x"
  ) {
    setTimeout(function () {
      alert("X Wins");
    }, 1);
    endGame();
  } else if (
    gameState.board[1][0] === "x" &&
    gameState.board[1][1] === "x" &&
    gameState.board[1][2] === "x"
  ) {
    setTimeout(function () {
      alert("X Wins");
    }, 1);
    endGame();
  } else if (
    gameState.board[2][0] === "x" &&
    gameState.board[2][1] === "x" &&
    gameState.board[2][2] === "x"
  ) {
    setTimeout(function () {
      alert("X Wins");
    }, 1);
    endGame();
  }
};

//checks player 2 rows
const OcheckWinnerRow = () => {
  if (
    gameState.board[0][0] === "o" &&
    gameState.board[0][1] === "o" &&
    gameState.board[0][2] === "o"
  ) {
    setTimeout(function () {
      alert("O Wins");
    }, 1);
    endGame();
  } else if (
    gameState.board[1][0] === "o" &&
    gameState.board[1][1] === "o" &&
    gameState.board[1][2] === "o"
  ) {
    setTimeout(function () {
      alert("O Wins");
    }, 1);
    endGame();
  } else if (
    gameState.board[2][0] === "o" &&
    gameState.board[2][1] === "o" &&
    gameState.board[2][2] === "o"
  ) {
    setTimeout(function () {
      alert("O Wins");
    }, 1);
    endGame();
  }
};

//checks player 1 columns
const XcheckWinnersColumn = () => {
  if (
    gameState.board[0][0] === "x" &&
    gameState.board[1][0] === "x" &&
    gameState.board[2][0] === "x"
  ) {
    setTimeout(function () {
      alert("X Wins");
    }, 1);
    endGame();
  } else if (
    gameState.board[0][1] === "x" &&
    gameState.board[1][1] === "x" &&
    gameState.board[2][1] === "x"
  ) {
    setTimeout(function () {
      alert("X Wins");
    }, 1);
    endGame();
  } else if (
    gameState.board[0][2] === "x" &&
    gameState.board[1][2] === "x" &&
    gameState.board[2][2] === "x"
  ) {
    setTimeout(function () {
      alert("X Wins");
    }, 1);
    endGame();
  }
};

//checks player 2 columns
const OcheckWinnersColumn = () => {
  if (
    gameState.board[0][0] === "o" &&
    gameState.board[1][0] === "o" &&
    gameState.board[2][0] === "o"
  ) {
    setTimeout(function () {
      alert("O Wins");
    }, 1);
    endGame();
  } else if (
    gameState.board[0][1] === "o" &&
    gameState.board[1][1] === "o" &&
    gameState.board[2][1] === "o"
  ) {
    setTimeout(function () {
      alert("O Wins");
    }, 1);
    endGame();
  } else if (
    gameState.board[0][2] === "o" &&
    gameState.board[1][2] === "o" &&
    gameState.board[2][2] === "o"
  ) {
    setTimeout(function () {
      alert("O Wins");
    }, 1);
    endGame();
  }
};

//check player 1 diagonals
const xDiagonals = () => {
  if (
    gameState.board[0][0] === "x" &&
    gameState.board[1][1] === "x" &&
    gameState.board[2][2] === "x"
  ) {
    setTimeout(function () {
      alert("X Wins");
    }, 1);
  } else if (
    gameState.board[0][2] === "x" &&
    gameState.board[1][1] === "x" &&
    gameState.board[2][0] === "x"
  ) {
    setTimeout(function () {
      alert("X Wins");
    }, 1);
    endGame();
  }
};

//check player 2 diagonals
const oDiagonals = () => {
  if (
    gameState.board[0][0] === "o" &&
    gameState.board[1][1] === "o" &&
    gameState.board[2][2] === "o"
  ) {
    setTimeout(function () {
      alert("O Wins");
    }, 1);
    endGame();
  } else if (
    gameState.board[0][2] === "o" &&
    gameState.board[1][1] === "o" &&
    gameState.board[2][0] === "o"
  ) {
    setTimeout(function () {
      alert("O Wins");
    }, 1);
    endGame();
  }
};
