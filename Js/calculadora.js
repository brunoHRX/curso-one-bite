// ## Calculadora de 4 Operações

// Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

// Após calcular os resultados o programa deve exibi-los na tela.

let primeiroValor = parseFloat(prompt('Insira o Primeiro Valor'))
let segundoValor = parseFloat(prompt('Insira o segundo Valor'))

let soma = primeiroValor + segundoValor
let subtração = primeiroValor - segundoValor
let multiplicação = primeiroValor * segundoValor
let divisão = primeiroValor / segundoValor

alert(
  'A soma desses valores é:' +
    soma +
    '\nA substração desses valores é: ' +
    subtração +
    '\nA multiplicação desses valores é: ' +
    multiplicação +
    '\nA divisão desses valores é: ' +
    divisão
)
