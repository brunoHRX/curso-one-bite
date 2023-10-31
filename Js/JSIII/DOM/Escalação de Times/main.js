// ### Escalação do Time

// Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

// - Escalar um jogador
//     - Informar a posição do jogador a ser escalado para o time.
//     - Informar o nome do jogador.
//     - Informar o número da camisa do jogador.
//     - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
//     - Após o jogador ser escalado os campos de texto devem ser limpos.
// - Remover um jogador
//     - Informar o número da camisa do jogador.
//     - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
//     - Após o jogador ser removido o campo de texto deve ser limpo.

// Dica: lembrando que é possível acessar o texto de um input através da propriedade value.

//escalarJogador

function escalarJogador() {
  const playerSection = document.getElementById('player-list')

  var playerName = document.getElementById('name').value
  var playerPosition = document.getElementById('position').value
  var playerNumber = document.getElementById('number').value

  const escalar = confirm('Deseja escalar esse jogador?')

  if (escalar) {
    const ul = document.createElement('ul')
    ul.setAttribute('id', playerNumber)
    const playerGlobal = document.createElement('li')
    playerGlobal.innerText =
      playerPosition + ': ' + playerName + ' (' + playerNumber + ' )'

    ul.appendChild(playerGlobal)
    ul.appendChild(document.createElement('br'))

    playerSection.append(ul)

    document.getElementById('name').value = ''
    document.getElementById('position').value = ''
    document.getElementById('number').value = ''
  }
}

function removerJogador() {
  const choice = prompt(
    'Qual o número da Camiseta do Jogador que deseja remover?'
  )

  const elementeRemove = document.getElementById(choice)

  if (elementeRemove) {
    elementeRemove.remove()
  } else {
    alert(
      'Número invalido, por favor clique novamente e insira um número válido!'
    )
  }
}
//removerJogador
