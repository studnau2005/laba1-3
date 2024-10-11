// Завдання 1.1. Love Calculator
function loveCalculator() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    if (!name1 || !name2) {
        document.getElementById("love-result").textContent = "Будь ласка, введіть обидва імена.";
        return;
    }
    const loveScore = Math.floor(Math.random() * 100) + 1;
    document.getElementById("love-result").textContent = name1 + " та " + name2 + " мають сумісність: " + loveScore + "%";
}

// Завдання 1.2. BMI Calculator
function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    if (!weight || !height) {
        document.getElementById("bmi-result").textContent = "Будь ласка, введіть вагу та зріст.";
        return;
    }
    const bmi = weight / (height * height);
    let result = "";
    if (bmi < 18.5) {
        result = "Недостатня вага";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result = "Нормальна вага";
    } else if (bmi >= 25 && bmi < 29.9) {
        result = "Надмірна вага";
    } else {
        result = "Ожиріння";
    }
    document.getElementById("bmi-result").textContent = "Ваш ІМТ: " + bmi.toFixed(2) + " (" + result + ")";
}

// Завдання 1.3. Перевірка високосного року
function isLeapYear() {
    const year = parseInt(document.getElementById("year").value);
    if (!year) {
        document.getElementById("leap-result").textContent = "Будь ласка, введіть рік.";
        return;
    }
    let result;
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        result = year + " є високосним роком";
    } else {
        result = year + " не є високосним роком";
    }
    document.getElementById("leap-result").textContent = result;
}

// Завдання 1.4. Хто купить каву?
function whoBuysCoffee() 
    const namesString = document.getElementById("names").value;
    if (!namesString) {
        document.getElementById("coffee-result").textContent = "Будь ласка, введіть імена.";
        return;
    }
    const names = namesString.split(',').map(name => name.trim());
