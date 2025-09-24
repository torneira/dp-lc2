//Aluno: Gustavo Aguiar Tenório Prazer
const prompt = require("prompt-sync")();


//1
linhap = 1

for(let i = 0; i<8;i++){
    let colunap = 1
    let linha = ""
    for(let j = 0; j<8; j++){
        if((linhap + colunap) % 2 === 0){
            linha = linha + "#"
            colunap++
        } else {
            linha = linha + "."
            colunap++
        }
    }
    linhap++
    console.log(linha)
}


//2
let n1 = parseInt(prompt("Digite um número:"));
            for (let i = 1; i <= n1; i++) {
                linha = ""
                for (let j = 1; j <= i; j++) {
                    if(j % 2 === 0){
                        linha = linha + "(" + j + ")"
                    }else{
                        linha += j;
                    }
                }

                console.log(linha);
            }

//3
let largura = parseInt(prompt("Insira a largura: "))
let altura = parseInt(prompt("Insira a altura: "))

for(let i = 1; i<=altura; i++){
    let linha = ""
    for(let j = 1; j<=largura; j++){
        if(j*i % 3 === 0){
            linha = linha + " " + "#" + " "
        }else{
            linha = linha + " " + i*j + " "
        }
    }
    console.log(linha)
}

//4
let n = parseInt(prompt("Digite o valor de n para a matriz: "))
for(let i = 1; i <= n; i++){
    let linha = ""
    for(let j = 1; j <= n; j++){
        if(i === j && (i + j) === (n + 1)){
            linha = linha + "X"
        } else if(i === j){
            linha = linha + "\\"
        } else if((i + j) === (n + 1)){
            linha = linha + "/"
        } else {
            linha = linha + "."
        }
    }
    console.log(linha)
}


//5
let n2 = parseInt(prompt("Digite um número ímpar para a pirâmide: "))
if(n2 % 2 === 0){
    console.log("Número par detectado, vou usar n-1 pra ficar ímpar")
    n2 = n2 - 1
}

let totalLinhas = n2

for(let i = 0; i < totalLinhas; i++){
    let linha = ""
    let numChars = 2 * i + 1
    let numSpaces = (n2 - numChars) / 2

    for(let s = 0; s < numSpaces; s++){
        linha = linha + " "
    }

    let caractere = ((i + 1) % 2 !== 0) ? "*" : "#"

    for(let c = 0; c < numChars; c++){
        linha = linha + caractere
    }

    console.log(linha)
}
