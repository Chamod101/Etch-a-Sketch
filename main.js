const populateboard = (size) => {
    let board = document.querySelector('.board');
    let square = board.querySelectorAll('div');
    square.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    const amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');

        square.addEventListener("mouseover", colorSqure);
        square.style.backgroundColor = 'Gray';
        board.insertAdjacentElement("beforeend", square);
    }
}


const changeSize = (input) => {
    if (input >= 2 && input <= 100) {
        populateboard(input);
    } else {
        alert("Please enter valide amount");
    }

}
function colorSqure() {
    this.style.backgroundColor = 'Black';
}