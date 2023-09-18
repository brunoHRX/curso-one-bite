// ## Conversor de Medidas

// Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

// - milímetro (mm)
// - centímetro (cm)
// - decímetro (dm)
// - decâmetro (dam)
// - hectômetro (hm)
// - quilômetro (km)

// O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

// O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)

let medida = parseFloat(
  prompt(
    'Ola, bem-vindo ao conversor de medidas, qual valor em metros (m) deseja converter?'
  )
)
let choice = prompt(
  'Escolha uma das opções de conversão abaixo:\n a) milímetro (mm)\n b) centímetro (cm)\n c)decímetro (dm)\n d)decâmetro (dam)\n e) hectômetro (hm)\n f)quilômetro (km)'
)

switch (choice) {
  case 'a':
    medida *= 1000
    alert(`O valor convertido é ${medida} mm`)
    break
  case 'b':
    medida *= 100
    alert(`O valor convertido é ${medida} cm`)
    break
  case 'c':
    medida *= 10
    alert(`O valor convertido é ${medida} dm`)
    break
  case 'd':
    medida /= 10
    alert(`O valor convertido é ${medida} dam`)
    break
  case 'e':
    medida /= 100
    alert(`O valor convertido é ${medida} hm`)
    break
  case 'f':
    medida /= 1000
    alert(`O valor convertido é ${medida} km`)
    break
  default:
    alert('Essa opção é inválida, por favor escolha uma opção valida!')
    break
}
