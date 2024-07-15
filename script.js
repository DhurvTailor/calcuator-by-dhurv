const inputBox = document.getElementById('inputbox');
const buttons = document.querySelectorAll('.button');

let inputValue = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.innerText;
        handleInput(buttonValue);
    });
});

document.addEventListener('keydown', (event) => {
    let key = event.key;
    
    if (key === 'Enter') {
        key = '=';
    } else if (key === 'Backspace') {
        key = 'DEL';
    } else if (key === 'Escape') {
        key = 'AC';
    }

    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '%', 'AC', 'DEL', '='];

    if (allowedKeys.includes(key)) {
        handleInput(key);
    }
});

function handleInput(value) {
    if (value === 'AC') {
        inputValue = '';
    } else if (value === 'DEL') {
        inputValue = inputValue.slice(0, -1);
    } else if (value === '=') {
        try {
            inputValue = eval(inputValue).toString();
        } catch (error) {
            inputValue = 'Error';
        }
    } else {
        inputValue += value;
    }

    inputBox.value = inputValue;
}
