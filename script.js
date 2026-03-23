let isplayerOne = true;
let cells = document.getElementsByClassName("cell");

let isGameOver = false; 

for (let i=0; i< cells.length; i++){
    cells[i].addEventListener('click', userMove);
}

function userMove(e){
    //Si el juego ya terminó salimos de la función sin hacer nada
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

function showWinner(player){
    document.querySelector('#results').innerHTML = player + " win";
    
    //Bloquea el tablero porque ya hay un ganador
    isGameOver = true; 
}

let restartBtn = document.getElementById("restart");

// Escuchar el clic en el botón
restartBtn.addEventListener('click', restartGame);

function restartGame() {
    //Limpiar el texto de todas las celdas
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    
    //Limpiar el texto del ganador
    document.querySelector('#results').innerHTML = "";
    
    //Reiniciar el turno para que las 'X' empiecen de nuevo
    isplayerOne = true;

    //Desbloquear el tablero para la nueva partida
    isGameOver = false; 
}