// ## Pilha de Cartas

// Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let choice = ''

let baralho = ['Dama', 'Valete', 'Rei', 'Às']

let escolhida = ''

do {
  choice = prompt(
    'N°  de Cartas no baralho: ' +
      baralho.length +
      '\n' +
      ' Escolha uma opção\n a) Adicionar Carta\n b) Puxar uma Carta\n c) Sair\n'
  )

  switch (choice) {
    case 'a':
      baralho.unshift(prompt('Qual o nome da carta a ser adicionada?'))
      alert('Carta Adicionada!')
      escolhida = ''
      break
    case 'b':
      escolhida = baralho.shift()
      alert('A carta ' + escolhida + ' foi puxada do baralho!')
      escolhida = ''
      break
  }
} while (choice != 'c')

alert('O sistema está sndo encerrado!')
