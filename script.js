let isplayerOne = true;
let cells = document.getElementsByClassName("cell");

//HOLA
for (let i=0; i< cells.length; i++){
    cells[i].addEventListener('click', userMove);
}

function userMove(e){
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
}


let restartBtn = document.getElementById("restart");

restartBtn.addEventListener('click', restartGame);

function restartGame() {

    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    

    document.querySelector('#results').innerHTML = "";
    

    isplayerOne = true;
}