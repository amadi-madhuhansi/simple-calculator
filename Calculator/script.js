const display = document.getElementById('display');

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            
            display.value = '';
        } 
        else if (value === '=') {
           
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
                setTimeout(() => display.value = '', 1500);
            }
        } 
        else {
            display.value += value;
        }
    });
});