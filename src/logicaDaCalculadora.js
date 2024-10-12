
let currentInput = '';  //currentInput: armazena o valor digitado.
let firstValue = '';    // firstValue: Armazena o primeiro valor que é digitado antes de uma operação ser escolhida.
let operation = '';     // Operation: Armazena a operação matemática selecionada (adição, subtração, multiplicação ou divisão).

function atualizaDisplay(valor) {
    document.getElementById('display').value = valor;
}

function sete() { currentInput += '7'; atualizaDisplay(currentInput); } 
function oito() { currentInput += '8'; atualizaDisplay(currentInput); }
function nove() { currentInput += '9'; atualizaDisplay(currentInput); }
function quatro() { currentInput += '4'; atualizaDisplay(currentInput); }
function cinco() { currentInput += '5'; atualizaDisplay(currentInput); }
function seis() { currentInput += '6'; atualizaDisplay(currentInput); }
function um() { currentInput += '1'; atualizaDisplay(currentInput); }
function dois() { currentInput += '2'; atualizaDisplay(currentInput); }
function tres() { currentInput += '3'; atualizaDisplay(currentInput); }
function zero() { currentInput += '0'; atualizaDisplay(currentInput); }

function ponto() {   // Permite a adição de um ponto decimal ao currentInput, garantindo que um ponto só seja adicionado se ainda não houver um.
    if (!currentInput.includes('.')) {
        currentInput += '.';
        atualizaDisplay(currentInput);
    }
}
function apagar() {
    currentInput = currentInput.slice(0, -1); // Remove o último caractere
    atualizaDisplay(currentInput); 
}

function adicao() {
    firstValue = currentInput;  
    currentInput = '';
    operation = '+';
}

function subtracao() {
    firstValue = currentInput;
    currentInput = '';
    operation = '-';
}

function multiplicacao() {
    firstValue = currentInput;
    currentInput = '';
    operation = '*';
}

function divisao() {
    firstValue = currentInput;
    currentInput = '';
    operation = '/';
}

function igual() {
    if (firstValue && currentInput) {
        let resultado = eval(firstValue + operation + currentInput);
        atualizaDisplay(resultado);
        currentInput = resultado.toString();  
    }
}

function zerar() {
    currentInput = '';
    firstValue = '';
    operation = '';
    atualizaDisplay('');
}

function zerar001() {
    currentInput = '';
    atualizaDisplay('');
}
document.addEventListener('keydown', function(event) { //listene para captura das teclas no teclado
    switch(event.key) {
        case '0': zero(); break;
        case '1': um(); break;
        case '2': dois(); break;
        case '3': tres(); break;
        case '4': quatro(); break;
        case '5': cinco(); break;
        case '6': seis(); break;
        case '7': sete(); break;
        case '8': oito(); break;
        case '9': nove(); break;
        case '+': adicao(); break;
        case '-': subtracao(); break;
        case '*': multiplicacao(); break;
        case '/': divisao(); break;
        case 'Enter': igual(); break; 
        case 'Escape': zerar(); break; 
        case '.': ponto(); break;
        case 'Backspace': apagar(); break;
    }
});

