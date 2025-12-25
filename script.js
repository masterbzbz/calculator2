const resultDisplay = document.getElementById('result');

function appendNumber(number) {
    resultDisplay.value += number;
}

function appendOperator(operator) {
    const lastChar = resultDisplay.value.slice(-1);
    if (resultDisplay.value === '' && operator !== '-') return;
    if (['+', '-', '*', '/'].includes(lastChar)) {
        resultDisplay.value = resultDisplay.value.slice(0, -1) + operator;
    } else {
        resultDisplay.value += operator;
    }
}

function clearScreen() {
    resultDisplay.value = '';
}

function deleteLast() {
    resultDisplay.value = resultDisplay.value.slice(0, -1);
}

function calculate() {
    try {
        // Using eval is generally unsafe but okay for a simple client-side calculator
        // We catch errors to handle invalid inputs
        if (resultDisplay.value === '') return;
        resultDisplay.value = eval(resultDisplay.value);
    } catch (error) {
        resultDisplay.value = 'Error';
        setTimeout(() => {
            resultDisplay.value = '';
        }, 1500);
    }
}
