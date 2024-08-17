const result = document.getElementById('result');

function insert(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (e) {
        result.value = 'Error';
    }
}

// Event listeners for buttons
document.querySelectorAll('.buttons input[type="button"]').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        if (value === 'C') {
            clearResult();
        } else if (value === '=') {
            calculate();
        } else {
            insert(value);
        }
    });
});

