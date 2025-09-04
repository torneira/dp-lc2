const prompt = require("prompt-sync")()

let num
let result

do{
    console.log("          MENU\n1-Somar por 2\n2-Subtrair por 2\n3-Dividir por 2\n4-Multiplicar por 2\n5-SAIR")

    num = parseFloat(prompt("Insira seu número: "))
    op = parseInt(prompt("Escolha uma opção: "))

    switch(op){
        case 1:
            result = num+2
            console.log(result)
        break
        case 2:
            result = num-2
            console.log(result)
        break
        case 3:
            result = num/2     
            console.log(result)
        break
        case 4:
            result = num*2
            console.log(result)       
        break

        default: 
            console.log("Opção invalida")
    }
} while (op != 5)