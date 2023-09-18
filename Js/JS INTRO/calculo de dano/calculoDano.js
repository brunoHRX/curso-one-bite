// ## Cálculo de Dano

// Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

// - Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
// - Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
// - Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.

let personagemAtk = {
  name: '',
  powerAtk: 0
}

let personagemDef = {
  name: '',
  powerDef: 0,
  lifePoint: 0,
  shield: ''
}

personagemAtk.name = prompt('Qual o nome do personagem Atacante?')
personagemAtk.powerAtk = parseFloat(
  prompt('Qual o poder de ataque deste personagem?')
)
personagemDef.name = prompt('Qual o nome do personagem defensor?')
personagemDef.lifePoint = parseFloat(
  prompt('Qauntos pontos de vida esse personagem tem?')
)
personagemDef.powerDef = parseFloat(
  prompt('Qual o poder de defesa deste personagem?')
)
personagemDef.shield = prompt('Ele tem escudo?')

const damage =
  personagemAtk.powerAtk > personagemDef.powerDef
    ? personagemDef.shield == 'sim'
      ? (personagemAtk.powerAtk - personagemDef.powerDef) / 2
      : personagemAtk.powerAtk - personagemDef.powerDef
    : 0

const shield = personagemDef.shield == 'sim' ? 'e escudo' : 'sem ter escudo'

personagemDef.lifePoint -= damage

alert(`O dano causado foi: ${damage}\n
O ${personagemAtk.name} tinha ${personagemAtk.powerAtk} de poder de ataque \n
Ja o ${personagemDef.name} ficou com\n
${personagemDef.lifePoint} de vida\n
Tendo ${personagemDef.powerDef} de poder de defesa ${shield}
`)
