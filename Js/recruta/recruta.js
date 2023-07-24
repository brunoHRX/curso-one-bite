// ## Cadastro de Recrutas

// Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:

// - o primeiro nome
// - o sobrenome
// - o campo de estudo
// - o ano de nascimento

// Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).

const primeiroNome = prompt('Qual seu Primeiro nome')
const sobreNome = prompt('Qual seu sobrenome')
const campoEstudo = prompt('Qual o seu Campo de Estudo')
const anoNascimento = prompt('Informe seu Ano de nasciment')

window.alert(
  'Recruta Cadastrado com Sucesso!\n' +
    '\nNome Completo: ' +
    primeiroNome +
    ' ' +
    sobreNome +
    '\nEstudando: ' +
    campoEstudo +
    '\nNascido no ano de: ' +
    anoNascimento
)
