// Масив для збереження послідовності кольорів
let sequence = [];
let userSequence = [];
let level = 0;
let isGameStarted = false;
let allowUserInput = false; // Дозвіл користувачу вводити послідовність

// Масив з кольорами
const colors = ["red", "blue", "green", "yellow"];

// Отримуємо кнопки кольорів
const buttons = {
    red: document.getElementById("red"),
    blue: document.getElementById("blue"),
    green: document.getElementById("green"),
    yellow: document.getElementById("yellow")
};

// Почати гру при натисканні на кнопку
document.getElementById("startButton").addEventListener("click", startGame);

// Додаємо подію на кожну кнопку кольору
for (let color in buttons) {
    buttons[color].addEventListener("click", () => handleUserClick(color));
}

// Функція початку гри
function startGame() {
    isGameStarted = true;
    level = 0;
    sequence = [];
    userSequence = [];
    allowUserInput = false; // Забороняємо вводити до відображення послідовності
    nextSequence();
}

// Генерація наступної послідовності
function nextSequence() {
    userSequence = [];
    const randomColor = colors[Math.floor(Math.random() * 4)];
    sequence.push(randomColor);
    level++;
    allowUserInput = false; // Забороняємо вводити послідовність під час показу
    showSequence(); // Відображаємо послідовність кольорів
}

// Показуємо послідовність кольорів користувачу по черзі з затримкою
function showSequence() {
    let i = 0;
    const interval = setInterval(() => {
        const color = sequence[i];
        playSound(color);
        animateButton(color);
        i++;
        if (i >= sequence.length) {
            clearInterval(interval); // Закінчуємо показ послідовності
            allowUserInput = true; // Дозволяємо користувачу вводити після показу
        }
    }, 1000); // Пауза між показами кольорів - 1 секунда
}

// Обробка натискання користувача на колір
function handleUserClick(color) {
    if (!isGameStarted || !allowUserInput) return; // Не дозволяємо кліки під час відображення послідовності

    userSequence.push(color);
    playSound(color);
    animateButton(color);

    const currentIndex = userSequence.length - 1;
    if (userSequence[currentIndex] !== sequence[currentIndex]) {
        gameOver(); // Якщо помилка, завершити гру
        return;
    }

    if (userSequence.length === sequence.length) {
        allowUserInput = false; // Забороняємо вводити під час переходу до наступного рівня
        setTimeout(nextSequence, 1000); // Переходимо до наступного рівня через 1 секунду
    }
}

// Анімація кнопок
function animateButton(color) {
    buttons[color].classList.add("active");
    setTimeout(() => {
        buttons[color].classList.remove("active");
    }, 500); // Анімація триватиме 500 мс
}

// Відтворюємо звук для кольору
function playSound(color) {
    const audio = new Audio(`sounds/${color}.mp3`);
    audio.play();
}

// Обробка завершення гри
function gameOver() {
    isGameStarted = false;
    allowUserInput = false;
    alert("Гра закінчена! Ви програли.");
}
