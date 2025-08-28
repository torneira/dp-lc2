const prompt = require("prompt-sync")()

let num = prompt("Escreva um número de 0 a 100: ")
let clas = "nada"

function A(num){
    for (let i = 90; i <= 100;){
        if (i == num){
            clas = "A"
            return clas
        } else {
            i++
        }
    }
    return
}
function B(num){
    for (let i = 80; i <= 89;){
        if (i == num){
            clas = "B"
            return clas
        } else {
            i++
        }
    }
    return
}
function C(num){
    for (let i = 70; i <= 79;){
        if (i == num){
            clas = "C"
            return clas
        } else {
            i++
        }
    }
    return
}
function D(num){
    for (let i = 60; i <= 69;){
        if (i == num){
            clas = "D"
            return clas
        } else {
            i++
        }
    }
    return
}



A(num)
B(num)
C(num)
D(num)
if (num < 60){
    clas = "F"
}

if (clas == "nada") {
    console.log("Número inválido")
} else {
    console.log(clas)
}