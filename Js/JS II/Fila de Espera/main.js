// ## Fila de Espera

// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

let choice = ''

let pacientes = ['Matheus', 'Andre', 'José', 'Bruno']

let fila = ''

do {
  for (let i = 0; i < pacientes.length; i++) {
    fila += i + 1 + 'º ' + pacientes[i] + '\n'
  }
  choice = prompt(
    'Fila de Pacientes\n' +
      fila +
      'Escolha uma opção\n a) Novo Paciente\n b) Consultar Paciente\n c) Sair\n'
  )

  switch (choice) {
    case 'a':
      pacientes.push(prompt('Qual o nome do Novo paciente?'))
      alert('Paciente Adicionado!')
      fila = ''
      break
    case 'b':
      fila = pacientes.shift()
      alert('Paciente ' + fila + ' consultado.')
      fila = ''
      break
  }
} while (choice != 'c')

alert('O sistema está sndo encerrado!')
