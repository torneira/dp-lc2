// let arr = []

// for(let i = 0; i < 8; i++){
//     arr.push(Math.floor(Math.random() * 100) + 1)
// }

// console.log(arr)

// let num1 = arr[Math.floor(Math.random() * 8) + 1]
// let num2 = arr[Math.floor(Math.random() * 8) + 1]

// soma = console.log("A soma de " + num1 + " + " + num2 + " é igual a: ", num1 + num2)


//1

// let m = [
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0]
// ]

// console.table(m)

//2

// let m = [
//     [],
//     [],
//     []
// ]

// for(let i = 0; i < 3; i++){
//     for(let j = 0; j < 4; j++){
//         m[i][j] = Math.floor(Math.random() * 10)
//     }
//     console.table(m)
// }

// console.table(m)

//3

let m = [
    [],
    [],
    [],
    []
]

let soma = 0

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        m[i][j] = Math.floor(Math.random() * 10)
        soma = soma+m[i][j]
    }
    console.table(m)
    console.log(soma)

}
