// ## Robô da Tabuada

// Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.

let choiceNumber = parseFloat(
  prompt('Qual numero deseja obter a tabuada? (limite 1 até 20)')
)
let multplayer = 1
let tabuada = ''
let result = 0

for (let multplayer = 1; multplayer <= 20; multplayer++) {
  result = choiceNumber * multplayer
  tabuada += '\n' + choiceNumber + ' x ' + multplayer + ' = ' + result
}

alert('A tabuada do numero ' + choiceNumber + ' de 1 até 20 é:\n' + tabuada)
