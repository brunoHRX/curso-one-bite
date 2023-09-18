// ## Controle Financeiro

// Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.

let saldo = parseFloat(
  prompt('Qual a sua quandidade iniciaol de dinheiro disponivel?')
)
let choice = ''
let changeMoney = 0
do {
  choice = prompt(
    'O saldo atual é: ' +
      saldo +
      '\n O que deseja fazer:\n a) Adicionar Dinheiro\n b) Remover Dinheiro\n c)Sair'
  )

  switch (choice) {
    case 'a':
      changeMoney = parseFloat(prompt('Quanto de dinheiro deseja adicionar?'))
      saldo += changeMoney

      break

    case 'b':
      changeMoney = parseFloat(prompt('Quanto de dinheiro deseja remover?'))
      saldo -= changeMoney

      break
  }
} while (choice != 'c')

alert('Programa Encerrado!')
