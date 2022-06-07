function calculadora(){
    const operacao = Number(window.prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 Divisão inteira (%)\n 6 - Potenciação (**)'));
}
let n1 = Number(window.prompt('Insira o primeiro valor:'));
let n2 = Number(window.prompt('insira o segundo valor:'));
let resultado;

calculadora();

function soma(){
    resultado = n1 + n2;
    window.alert(''+n1+ '+' +n2+ '=' +resultado+ '')
}
function subtracao(){
    resultado = n1 - n2;
    window.alert(''+n1+ '-' +n2+ '=' +resultado+ '')
}
function multiplicacao(){
    resultado = n1 * n2;
    window.alert(''+n1+ '*' +n2+ '=' +resultado+ '')
}
function divisaoReal(){
    resultado = n1 / n2;
    window.alert(''+n1+ '/' +n2+ '=' +resultado+ '')
}
function divisaoInteira(){
    resultado = n1 % n2;
   window.alert('O resto da divisão entre'+n1+ 'e' +n2+ 'é igual a: ' +resultado+ '' )
}
function potenciacao(){
    resultado = n1 ** n2;
    window.alert(''+n1+ 'elevado à ' +n2+ 'é igual a: ' +resultado+ '')
}

if (operação = 1) {
    soma();
 } else if (operação = 2){
     subtração();
 } else if (operação = 3){
     multiplicação();
 } else if (operação = 4){
     divisaoReal();
 } else if (operação = 5){
     divisaoInteira();
 } else if (operação = 6){
     potenciacao();
 }   
 
 

                
