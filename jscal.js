document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.getAttribute('data-value');
            switch(value) {
                case 'AC':
                    display.innerText = '0';
                    break;
                case '=':
                    try {
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error';
                    }
                    break;
                default:
                    const lastChar = display.innerText.slice(-1);
                    const operators = ['+','-','*','/'];
                    if (operators.includes(lastChar)&& operators.includes(value)){
                        return;
                    }
                    if (display.innerText === '0') {
                        display.innerText = value;
                    } else {
                        display.innerText += value;
                    }
                    break;
            }
        });
    });
});
