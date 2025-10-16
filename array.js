let arr = []

for(let i = 0; i < 8; i++){
    arr.push(Math.floor(Math.random() * 100) + 1)
}

console.log(arr)

let num1 = arr[Math.floor(Math.random() * 8) + 1]
let num2 = arr[Math.floor(Math.random() * 8) + 1]

soma = console.log("A soma de " + num1 + " + " + num2 + " é igual a: ", num1 + num2)
