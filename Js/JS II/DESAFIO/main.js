// ## Sistema de Vagas de Emprego

// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

// - Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
//     - Listar vagas disponíveis
//     - Criar um nova vaga
//     - Visualizar uma vaga
//     - Inscrever um candidato em uma vaga
//     - Excluir uma vaga
//     - Sair
// - A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
// - A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
// - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
// - A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
// - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.

let vagas = [
  {
    nome: 'Atendente do Burguer King',
    descricao: 'Serviço de atendimento na recepção do Drive',
    dataLimite: '22/11/2023',
    candidatosInscritos: 0,
    nomeCandidatos: []
  },
  {
    nome: 'Atendente do Cassems',
    descricao: 'Serviço de atendimento na recepção da Cassems',
    dataLimite: '21/10/2022',
    candidatosInscritos: 0,
    nomeCandidatos: []
  },
  {
    nome: 'Tester Riot GAMES',
    descricao: 'Serviço de Teste',
    dataLimite: '23/10/2023',
    candidatosInscritos: 0,
    nomeCandidatos: []
  },
  {
    nome: 'Motorista de Luxo',
    descricao: 'Motorista de Veículos de Luxo',
    dataLimite: '28/01/2023',
    candidatosInscritos: 0,
    nomeCandidatos: []
  }
]

function gerarLista() {
  let lista = ''
  vagas.forEach(function (vaga) {
    lista +=
      vagas.indexOf(vaga) +
      1 +
      ' º ' +
      vaga.nome +
      ' com ' +
      vaga.candidatosInscritos +
      ' candidatos inscritos\n'
  })
  return lista
}

function listarVagas() {
  const lista = gerarLista()
  alert('Segue a Lista de Vagas\n' + lista + '\n')
}

function criarVaga() {
  let novaVaga = []
  novaVaga.nome = prompt('Qual o Nome da Vaga?')
  novaVaga.descricao = prompt('Informe uma breve descrição desta vaga!')
  novaVaga.dataLimite = prompt('Informe uma data Limite ex: 28/10/1993')
  novaVaga.candidatosInscritos = 0
  novaVaga.nomeCandidatos = []

  do {
    choiceVaga = prompt(
      'Confirme as informações da vaga\n' +
        'Nome da Vaga: ' +
        novaVaga.nome +
        '\n' +
        'Descrição: ' +
        novaVaga.descricao +
        '\n' +
        'Data Limite: ' +
        novaVaga.dataLimite +
        '\n' +
        'Os dados estão corretos\n a) Sim\n b) Não\n'
    )

    switch (choiceVaga) {
      case 'a':
        vagas.push(novaVaga)
        alert('Vaga criada com Sucesso!')
        novaVaga = []
        break
      case 'b':
        alert('Informe novamente os dados da VAGA')
        break
    }
  } while (choiceVaga === 'b')
}

function visualizarVaga() {
  const lista = gerarLista()
  const indexVaga = prompt('Qual vaga deseja visualizar?\n' + lista)
  alert(
    indexVaga +
      ' º vaga ' +
      '\n' +
      vagas[indexVaga - 1].nome +
      '\n' +
      'Descrição: ' +
      vagas[indexVaga - 1].descricao +
      '\n' +
      'Data Limite: ' +
      vagas[indexVaga - 1].dataLimite +
      '\n' +
      'Nº de Candidatos inscritos ' +
      vagas[indexVaga - 1].candidatosInscritos +
      '\n' +
      'Relação dos Candidatos: ' +
      vagas[indexVaga - 1].nomeCandidatos +
      '\n'
  )
}
1
function inscreverCandidato() {
  const nomeCandidadto = prompt('Qual o nome do candidato a ser inscrito?')

  do {
    const lista = gerarLista()
    const indexVaga = prompt(
      'Qual o indice da vaga para qual você deseja inscreve-lo\n' + lista
    )

    confirmacao = prompt(
      indexVaga +
        ' º vaga ' +
        '\n' +
        vagas[indexVaga - 1].nome +
        '\n' +
        'Descrição: ' +
        vagas[indexVaga - 1].descricao +
        '\n' +
        'Data Limite: ' +
        vagas[indexVaga - 1].dataLimite +
        '\n' +
        'Nº de Candidatos inscritos ' +
        vagas[indexVaga - 1].candidatosInscritos +
        '\n' +
        'Relação dos Candidatos: ' +
        vagas[indexVaga - 1].nomeCandidatos +
        '\n' +
        'Essa é a vaga que você deseja inscrever ?\n a) Sim\n b) Nao\n'
    )

    switch (confirmacao) {
      case 'a':
        vagas[indexVaga - 1].candidatosInscritos++
        vagas[indexVaga - 1].nomeCandidatos.push(nomeCandidadto)
        break
      default:
        break
    }
  } while (confirmacao !== 'a')
}

function excluirVaga() {
  do {
    const lista = gerarLista()
    const indexVaga = prompt(
      'Qual o indice da vaga que você deseja Excluir?\n' + lista
    )
    const confirmacao = prompt(
      indexVaga +
        ' º vaga ' +
        '\n' +
        vagas[indexVaga - 1].nome +
        '\n' +
        'Descrição: ' +
        vagas[indexVaga - 1].descricao +
        '\n' +
        'Data Limite: ' +
        vagas[indexVaga - 1].dataLimite +
        '\n' +
        'Nº de Candidatos inscritos ' +
        vagas[indexVaga - 1].candidatosInscritos +
        '\n' +
        'Relação dos Candidatos: ' +
        vagas[indexVaga - 1].nomeCandidatos +
        '\n' +
        'Essa é a vaga que você deseja inscrever ?\n a) Sim\n b) Nao\n'
    )

    switch (confirmacao) {
      case 'a':
        vagas.splice(indexVaga - 1, 1)
        break
      default:
        break
    }
  } while (confirmacao === 'b')
}

function menu() {
  return prompt(
    'SISTEMA DE VAGAS DE EMPPREGO\n' +
      'Escolha uma Opção\n' +
      '1. Listar vagas disponíveis\n' +
      '2. Criar uma nova vaga\n' +
      '3. Visualizar uma vaga\n' +
      '4. Inscrever um candidato\n' +
      '5. Excluir uma vaga\n' +
      '6. Sair\n'
  )
}

function executar() {
  let opcao = ''

  do {
    opcao = menu()
    let choice

    switch (opcao) {
      case '1':
        choice = listarVagas()
        break
      case '2':
        choice = criarVaga()
        break
      case '3':
        choice = visualizarVaga()
        break
      case '4':
        choice = inscreverCandidato()
        break
      case '5':
        choice = excluirVaga()
        break
      case '6':
        alert('Saindo...')
        break
      default:
        alert('Opção Invalida!')
        break
    }
  } while (opcao !== '6')
}

executar()
