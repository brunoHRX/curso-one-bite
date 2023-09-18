// ## Visitando Novas Cidades

// Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.

const name = prompt('Qual seu nome?')

let choice = prompt('Você ja visitou alguma cidade?')

let cidade = ''
let i = 0
while (choice == 'sim') {
  cidade += '\n' + prompt('Qual cidade?')
  i++

  choice = prompt('Você ja visitou alguma cidade?')
}

alert('O Turista ' + name + ':\n Vivitou ' + i + ' cidade(s): \n' + cidade)
