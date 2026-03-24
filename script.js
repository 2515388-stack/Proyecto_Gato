let isplayerOne = true;
let cells = document.getElementsByClassName("cell");

// NUEVO: Variables para llevar la cuenta del marcador
let scoreX = 0;
let scoreO = 0;

// Variable para saber si el juego ya terminó
let isGameOver = false; 

for (let i=0; i< cells.length; i++){
    cells[i].addEventListener('click', userMove);
}

function userMove(e){
    // Si el juego ya terminó, salimos de la función sin hacer nada
    if (isGameOver) {
        return; 
    }

    let cellvalue = e.target.innerHTML;
    if (!cellvalue.length){
        e.target.innerHTML = isplayerOne? 'X' : 'O';
        isplayerOne = !isplayerOne;

        checkLine(0, 1, 2);
        checkLine(3, 4, 5);
        checkLine(6, 7, 8);
        checkLine(0, 3, 6);
        checkLine(1, 4, 7);
        checkLine(2, 5, 8);
        checkLine(0, 4, 8);
        checkLine(6, 4, 2);
    }
}

function checkLine(c1, c2, c3){
    if(
        cells[c1].innerHTML.length &&
        cells[c1].innerHTML == cells[c2].innerHTML &&
        cells[c2].innerHTML == cells[c3].innerHTML
    ){
        showWinner(cells[c1].innerHTML);
    }
}

// CORREGIDO Y ACTUALIZADO: Función showWinner
function showWinner(player){
    // 1. Bloqueamos el tablero porque ya hay un ganador
    isGameOver = true; 
    
    // 2. Mostramos el mensaje de victoria
    document.querySelector('#results').innerHTML = player + " gana!";

    // 3. NUEVO: Sumamos el punto al marcador correspondiente
    if (player === 'X') {
        scoreX++;
        document.getElementById('scoreX').innerText = scoreX;
    } else if (player === 'O') {
        scoreO++;
        document.getElementById('scoreO').innerText = scoreO;
    }
}

let restartBtn = document.getElementById("restart");

// Escuchar el clic en el botón
restartBtn.addEventListener('click', restartGame);

function restartGame() {
    // 1. Limpiar el texto de todas las celdas
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    
    // 2. Limpiar el texto del ganador
    document.querySelector('#results').innerHTML = "";
    
    // 3. Reiniciar el turno para que las 'X' empiecen de nuevo
    isplayerOne = true;

    // 4. Desbloquear el tablero para la nueva partida
    isGameOver = false; 
}