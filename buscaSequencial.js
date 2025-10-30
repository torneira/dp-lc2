// let arr = [2, 5, 12, 58, 3]
// let valorProcurado = 99

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] == valorProcurado){
//         achou = true
//     }
// }

// if(achou == true){
//     console.log("Número encontrado")
// }else{
//     console.log("Número não encontrado")
// }

// let arr = []
// let qtd = 0

// for(let i = 0; i < 99; i++){
//     arr[i] = Math.floor(Math.random() * 100)
// }

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         qtd++
//     }
// }

// console.log(arr)
// console.log(qtd)

// let arr = []

// for(let i = 0; i < 99; i++){
//     arr[i] = Math.floor(Math.random() * 10)
// }

// for(let i = 0; i<arr.length; i++){
//     if(arr[i] > 5){
//         console.log("Posição: " + i + "\nValor: " + arr[i])
//     }
// }

// console.log(arr)

let arr = []
let maiores = []
let menores = []
let qtd = 0

for(let i = 0; i < 99; i++){
    arr[i] = Math.floor(Math.random() * 10)
}

for(let i = 0; i<arr.length; i++){
    if(arr[i] > 5){
        maiores.push(arr[i])
    }else{
        if(arr[i] < 5){
            menores.push(arr[i])
        } else {
            if(arr[i] == 5){
                qtd++
            }
        }
    }
}



console.log(arr)