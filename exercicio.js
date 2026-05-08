/*exercicio 1*/

let salário = Number.parseFloat(window.prompt('Digite seu salario:'))
let imposto = Number.parseFloat(window.prompt('Digite quanto você paga de imposto:'))

let salario_liquido = salário - imposto

window.alert(`Seu salario liquido é de ${salario_liquido}`)

/*exercicio 2*/

let carro = window.prompt('Informe o modelo do seu carro')
let quilometros = Number.parseFloat(window.prompt('Informa quantos km você percorreu:'))
let litros = Number.parseFloat(window.prompt('Informe a quantidade de litros gastos no percurso'))

consumo=quilometros/litros
alert(`O consumo do carro ${carro} é de ${consumo} km/litro`)