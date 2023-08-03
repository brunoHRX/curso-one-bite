// ## Cadastro de Imóveis

// Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

// - Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
// - O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
// - O menu deve ter a opção de salvar um imóvel.
// - Para salvar um novo imóvel o programa deve pedir as seguintes informações:
//     - Nome do proprietário.
//     - Quantidade de quartos.
//     - Quantidade de banheiros.
//     - Se possui garagem.
// - O menu também deve ter a opção de mostrar todos os imóveis salvos.

let choice = ''

let imoveis = []

let newImovel = {}

do {
  choice = prompt(
    'Ola, bem vindo ao CadMoveis, atualmente temos ' +
      imoveis.length +
      ' imoveis cadastrados\n' +
      'Escolha uma opção\n a) Novo imovel\n b) Consultar imoveis\n c) Sair\n'
  )
  switch (choice) {
    case 'a':
      newImovel.nomeProprietario = prompt(
        'Para Cadastrar o Imovel Informe o Nome do Proprietário?'
      )
      newImovel.quantosQuartos = parseFloat(
        prompt('Informe quantos quartos tem no imóvel?')
      )
      newImovel.quantosBanheiros = parseFloat(
        prompt('Informe quantos banheiros tem no imóvel?')
      )
      newImovel.temGaragem = prompt('Este imóvel possui garagem?')
      alert('Novo imóvel cadastrado com sucesso!')

      imoveis.push(newImovel)

      newImovel = {}
      break
    case 'b':
      let indexMoveis = ''
      for (let i = 0; i < imoveis.length; i++) {
        indexMoveis += i + 1 + 'º Imovel ' + imoveis[i].nomeProprietario + '\n'
        // alert(i + 1 + 'º Imovel ' + '\n' + imoveis[i].nomeProprietario)
      }

      alert('Lista de Imoveis \n' + indexMoveis)
    case 'c':
      alert('O programa será encerrado!')
    default:
      alert('Por Favor, escoha uma opção Valida.')
      break
  }
} while (choice != 'c')
