const prompt = require("prompt-sync")();


do{
    op = parseInt(prompt("         MENU\n1 - Tabuada\n2 - Quadrado númerico\n3 - Múltiplos de 3\n4 - Sair\nEscolha: "))

    switch(op){
        case 1:
            for(let i = 1; i<=10; i++){
                console.log("Tabuada do "+i+":")
                for(let j = 0; j<=10; j++){
                    conta = i*j
                    console.log(i + "x" + j + " = " + conta)
                }
            }
        break
        case 2:
            num = parseInt(prompt("Insira um número: "))
            numAt = 1
            for( let i = 0; i<num; i++){
                let linha = ""
                for( let j = 0; j<num; j++){
                    linha = linha + " " + numAt + " "
                    numAt++
                }
                console.log(linha)
            }
        break
        case 3:
            let valorI = parseInt(prompt("Insira o valor inicial: "))
            let valorf = parseInt(prompt("Insira o valor final: "))

            for(let i = valorI; i<=valorf; i++){
                if(i % 3 === 0){
                    console.log(i)
                }
            }
        break
        case 4:
            console.log("Encerrando o programa...")
        break
        default:
            console.log("Opção inexistente")
    }
}while(op != 4)