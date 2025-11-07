function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === '=') {
                calculate();
            } else if (value === 'C') {
                clearDisplay();
            } else {
                appendToDisplay(value);
            }
        });
    });
});