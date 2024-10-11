const cells = document.querySelectorAll(".cell");
let currentPlayer = "X"; // Гравець завжди грає за "X"
let isGameActive = true; // Чи активна гра
const statusDisplay = document.getElementById('status');

// Всі можливі виграшні комбінації
const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтальні
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикальні
    [0, 4, 8], [2, 4, 6]             // Діагональні
];

// Перевірка перемоги
function checkWinner() {
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return cells[index].textContent === currentPlayer;
        });
    });
}

// Логіка ходу гравця
function handleCellClick(event) {
    const cell = event.target;
    
    // Якщо клітинка зайнята або гра завершена, не дозволяємо діяти
    if (cell.textContent !== "" || !isGameActive || currentPlayer === "O") {
        return;
    }

    cell.textContent = currentPlayer;
    
    if (checkWinner()) {
        statusDisplay.textContent = `${currentPlayer} виграв!`;
        isGameActive = false;
        return;
    }

    if (Array.from(cells).every(cell => cell.textContent !== "")) {
        statusDisplay.textContent = "Нічия!";
        isGameActive = false;
        return;
    }

    // Перемикання на хід бота
    currentPlayer = "O";
    statusDisplay.textContent = "Хід бота...";
    setTimeout(botMove, 500); // Бот робить хід через півсекунди
}

// Хід бота
function botMove() {
    let emptyCells = Array.from(cells).filter(cell => cell.textContent === "");
    if (emptyCells.length > 0) {
        let randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        randomCell.textContent = "O";

        if (checkWinner()) {
            statusDisplay.textContent = "O виграв!";
            isGameActive = false;
            return;
        }

        currentPlayer = "X";
        statusDisplay.textContent = "Ваш хід";
    }

    if (Array.from(cells).every(cell => cell.textContent !== "")) {
        statusDisplay.textContent = "Нічия!";
        isGameActive = false;
    }
}

// Очищення поля для нової гри
function resetGame() {
    cells.forEach(cell => {
        cell.textContent = "";
    });
    currentPlayer = "X";
    isGameActive = true;
    statusDisplay.textContent = "Ваш хід";
}

// Прив'язка подій до клітинок
cells.forEach(cell => {
    cell.addEventListener("click", handleCellClick);
});

// Прив'язка події до кнопки для перезапуску гри
document.getElementById("resetButton").addEventListener("click", resetGame);
