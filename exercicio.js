let salário = Number.parseFloat(window.prompt('Digite seu salario'))
let imposto = Number.parseFloat(window.prompt('Digite quanto você paga de imposto'))

let salario_liquido = salário - imposto

window.alert(`Seu salario liquido é de ${salario_liquido}`)