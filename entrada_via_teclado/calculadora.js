var num1 = parseInt(prompt('Digite o primeiro número:'));
var num2 = parseInt(prompt('Digite o segundo número:'));
var soma = num1 + num2;
var multiplicacao = num1 * num2;
var subtracao = num1 - num2;
var divisao = num1/num2;

//console.log(soma);
document.getElementById('num1').innerHTML = num1;
document.getElementById('num2').innerHTML = num2;
document.getElementById('soma').innerHTML = soma;
document.getElementById('multiplicacao').innerHTML = multiplicacao;
document.getElementById('subtracao').innerHTML = subtracao;
document.getElementById('divisao').innerHTML = divisao;
    