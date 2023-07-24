// ## Teste de Velocidade

// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

const nomeVeiculo1 = prompt('Qual o nome do Veículo 1')
const velocidade1 = prompt('Qual a velocidade do veículo')
const nomeVeiculo2 = prompt('Qual o nome do Veículo 2')
const velocidade2 = prompt('Qual a velocidade do veículo')

const comparation =
  velocidade1 > velocidade2
    ? `O veiculo ${nomeVeiculo1} é o mais rápido`
    : velocidade1 < velocidade2
    ? `O veiculo ${nomeVeiculo2} é o mais rápido`
    : 'Os dois veículos tem a mesma velicidade'

alert(comparation)
