const prompt = require("prompt-sync")();

// linhap = 1

// for(let i = 0; i<8;i++){
//     let colunap = 1
//     let linha = ""
//     for(let j = 0; j<8; j++){
//         if((linhap + colunap) % 2 === 0){
//             linha = linha + "#"
//             colunap++
//         } else {
//             linha = linha + "."
//             colunap++
//         }
//     }
//     linhap++
//     console.log(linha)
// }

// let n1 = parseInt(prompt("Digite um número:"));
//             for (let i = 1; i <= n1; i++) {
//                 linha = ""
//                 for (let j = 1; j <= i; j++) {
//                     if(j % 2 === 0){
//                         linha = linha + "(" + j + ")"
//                     }else{
//                         linha += j;
//                     }
//                 }

//                 console.log(linha);
//             }

// let largura = parseInt(prompt("Insira a largura: "))
// let altura = parseInt(prompt("Insira a altura: "))

// for(let i = 1; i<=altura; i++){
//     let linha = ""
//     for(let j = 1; j<=largura; j++){
//         if(j*i % 3 === 0){
//             linha = linha + " " + "#" + " "
//         }else{
//             linha = linha + " " + i*j + " "
//         }
//     }
//     console.log(linha)
// }

let n = parseInt(prompt("Insira um número: "))

for(let i = 1; i<=n; i++){
    let linha = ""
    for(let j = 1; j<=n; j++){
        if(i === j){
            linha = linha + "\"
        }
        }
    }
    console.log(linha)
}