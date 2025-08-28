const prompt = require("prompt-sync")()

let data = new Date()

let ano = data.getFullYear()
let mes = data.getMonth() + 1
let dia = data.getDate()

console.log(data)
console.log(dia, mes, ano)
console.log(dia+"/"+mes+"/"+ano)