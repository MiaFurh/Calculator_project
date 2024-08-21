const operators = ['+', '-', '*', '/'];
let errorState = false; // Track if the calculator is in an error state

const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');

    switch(value) {
        case 'AC':
            display.innerText = '';
            errorState = false; // Clear error state
            break;
        case '=':
            const lastChar = display.innerText.slice(-1);
            if (operators.includes(lastChar)) {
                display.innerText = 'Error';
                errorState = true; // Set error state
            } else {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                    errorState = true; // Set error state
                }
            }
            break;
        default:
            // Ignore input if in error state
            if (errorState) return;

            const lastCharInDefault = display.innerText.slice(-1);
            if (operators.includes(lastCharInDefault) && operators.includes(value)) {
                return; // Ignore the second operator click
            }

            // Handle the case where the display is '0'
            if (display.innerText === '0') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
            break;
        };
    });
});
