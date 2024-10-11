// Отримуємо всі елементи з класом 'instrument'
const instruments = document.querySelectorAll('.instrument');

// Додаємо подію 'click' для кожного інструмента
instruments.forEach(instrument => {
    instrument.addEventListener('click', () => handleInstrumentClick(instrument.id));
});

// Додаємо подію для клавіш клавіатури
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case '1':
            handleInstrumentClick('drum'); // Клавіша "1" для барабану
            break;
        case '2':
            handleInstrumentClick('piano'); // Клавіша "2" для піаніно
            break;
        case '3':
            handleInstrumentClick('guitar'); // Клавіша "3" для гітари
            break;
    }
});

// Функція обробки натискання на інструмент
function handleInstrumentClick(instrumentId) {
    playSound(instrumentId, () => {
        // Активуємо візуальний ефект
        const instrumentElement = document.getElementById(instrumentId);
        instrumentElement.classList.add('active');
        
        // Використовуємо setTimeout для зняття ефекту через 200 мілісекунд
        setTimeout(() => {
            instrumentElement.classList.remove('active');
        }, 200);
    });
}

// Функція відтворення звуку
function playSound(instrument, callback) {
    const audio = new Audio(`${instrument}.mp3`); // Використовуємо відносний шлях до звуку
    audio.play();
    
    // Викликаємо callback після відтворення звуку
    if (callback) {
        callback();
    }
}
