// const readline = require('readline');

const playerX = 'X';
const playerO = 'O';
let turns = [];
let board = [];
let currentPlayer = '';

function startGame() {
    turns = [];
    board = Array(9).fill(' ');
    turns.push(playerX)
    for(let i = 0; i< 4; i++) {
        turns.push(playerO)
        turns.push(playerX);
    }
    nextPlayer();
}

function play(square) {
    board[square] = currentPlayer;
    showBoard();
    nextPlayer();
}

function showBoard() {
    for(let i = 0; i < board.length; i++) {
        let square = document.getElementById(`cell${i}`);
        square.value = baord[i];
    }
}

function isWinner() {
    return false;
}

function isDraw() {
    if(turns.length == 0){
        return true;
    }

    return false;
}

function nextPlayer() {
    currentPlayer = turns.pop();
}

function drawBoard() {
    let display = [];
    for(let i = 0; i < 3; i++) {
        let offset = i * 3;
        display.push(`${board[0 + offset]}|${board[1 + offset]}|${board[2 + offset]}`);
        if(i < 2){
            display.push('_________');
        }
    }
    console.log(display.join('\n'));
}
