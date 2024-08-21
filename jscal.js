const operators = ['+', '-', '*', '/'];
let errorState = false;
const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');

        switch(value) {
            case 'AC':
                display.innerText = '';
                errorState = false; // Reset error state
                break;
            case '=':
                if (display.innerText.trim() === '') {
                    display.innerText = '';
                } else {
                    const lastChar = display.innerText.slice(-1);
                    if (operators.includes(lastChar)) {
                        display.innerText = 'Error';
                        errorState = true; // Set error state
                    } else {
                        try {
                            display.innerText = eval(display.innerText);
                        } catch {
                            display.innerText = 'Error';
                            errorState = true; 
                        }
                    }
                }
                break;
                
            default:
                if (errorState) return;
                const lastCharInDefault = display.innerText.slice(-1);
                if (operators.includes(lastCharInDefault) && operators.includes(value)) {
                    return;
                }
                if (display.innerText === '0') {
                    display.innerText = value;
                } else {
                    display.innerText += value;
                }
                break;
        };
    });
});
