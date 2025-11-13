const prompt = require("prompt-sync")()

let cartas = []
let loops

//Cadastrar carta

let carta = []


do{
    let valores = prompt("Insira o nome da carta: ")
    let repetida =false
    for(let i = 0; i < cartas.length; i++){
                for(let j = 0; j < cartas[i].length; j++){
                    if (cartas[i][j] == "Nome: " + valores) repetida = true 
                }
            }


    if (valores.trim() !== "" && repetida === false){
        loops = true
        carta.push("Nome: " + valores)
    } else {
        console.log("Adiocione um valor válido")
        loops = false
    }
    console.log(carta)
} while (loops != true)

do{
let valores = parseInt(prompt("Insira o ataque da carta: "))

if (isNaN(valores)){
    loops = false
    console.log("Adiocione um valor válido")
} else {
    carta.push("Ataque: " + valores)
    loops = true
}
} while (loops != true)

do{
let valores = parseInt(prompt("Insira a defesa da carta: "))

if (isNaN(valores)){
    console.log("Adiocione um valor válido")
    loops = false
} else {
    carta.push("Defesa: " + valores)
    loops = true
}
} while (loops != true)

do{
let valores = parseInt(prompt("Insira a velocidade da carta: "))

if (isNaN(valores)){
    console.log("Adiocione um valor válido")
    loops = false
} else {
    carta.push("Velocidade: " + valores)
    loops = true
}
} while (loops != true)

do{
let valores = parseInt(prompt("É Super-trunfo\n1 - SIM\n2 - NÃO\nResposta: "))

if (isNaN(valores) || (valores !== 1 && valores !== 2)){
    console.log("Adiocione um valor válido")
    loops = false
} else {
    if (valores === 1) {
      for (let i = 0; i < cartas.length; i++) {
        for (let j = 0; j < cartas[i].length; j++) {
          if (cartas[i][j] === "Super-trunfo") {
            cartas[i].splice(j, 1, "Não é Super-trunfo")
          }
        }
      }
        carta.push("Super-trunfo")
    } else {
        carta.push("Não é Super-trunfo")
    }
}
} while (loops != true)

cartas.push(carta)

console.log(cartas)