const prompt = require("prompt-sync")()

let alunos = [
  ["Ana", 2021, 7.5, 8.0],
  ["Bruno", 2022, 5.0, 6.0],
  ["Carla", 2023, 9.0, 8.5]
];

console.log("============ MENU ============")
console.log("1 - Inserir novo aluno")
console.log("2 - Remover aluno")
console.log("3 - Exibir média do aluno")
console.log("4 - Exibir média de todos os alunos")
console.log("5 - SAIR")

let opcao = parseInt(prompt("Selecione sua opção: "))

do{
    switch (opcao) {
        case 1:
            let aluno = []

                do{
                    let valores = prompt("Insira o nome do aluno: ")
                    if (valores.trim() !== ""){
                        loops = true
                        aluno.push(valores)
                    } else {
                        console.log("Adicione um valor válido")
                        loops = false
                    }
                } while (loops != true)

                do{
                    let valores = parseInt(prompt("Insira a matricula do aluno: "))
                    if (isNaN(valores)){
                        loops = false
                        console.log("Adicione um valor válido")
                    } else {
                        aluno.push(valores)
                        loops = true
                    }
                } while (loops != true)

                do{
                    let valores = parseFloat(prompt("Insira a nota 1 do aluno: "))
                    if (isNaN(valores)){
                        loops = false
                        console.log("Adicione um valor válido")
                    } else {
                        aluno.push(valores)
                        loops = true
                    }
                } while (loops != true)

                do{
                    let valores = parseFloat(prompt("Insira a nota 2 do aluno: "))
                    if (isNaN(valores)){
                        loops = false
                        console.log("Adicione um valor válido")
                    } else {
                        aluno.push(valores)
                        loops = true
                    }
                } while (loops != true)

                alunos.push(aluno)
        break
        case 2:
            console.log(alunos)
            removeu = false
            loops = false
            do{
                let valores = prompt("Insira o nome do aluno a ser removido: ")
                for(let i = 0; i < alunos.length; i++){
                    for(let j = 0; j < alunos[i].length; j++){
                        if (alunos[i][j] == valores){
                            alunos.splice(valores, 1)
                            removeu = true
                        } else {
                            break
                        }
                    }
                }
                if(removeu == true){
                    console.log("Aluno removido")
                    loops = true
                }else{
                    console.log("Aluno não encontrado")
                    loops = false
                }
            }while(loops != true)
        break
        case 3:
            let valores = prompt("Insira o nome do aluno: ")
            for(let i = 0; i < alunos.length; i++){
                for(let j = 0; j < alunos[i].length; j++){
                    if (alunos[i][j] == valores){
                        console.log("Nome: " + alunos[i][0] + " Matricula: " +  alunos[i][1] + "Nota 1: " + alunos[i][2] + " Nota 2: " + alunos[i][3] + " Media: " + ((alunos[i][2]+alunos[i][3])/2))
                    } else {
                        break
                    }
                }
            }
        break
        case 4:
            for( let i = 0; i< alunos.length; i++){
            console.log("Nome: " + alunos[i][0] + ", Matricula: " +  alunos[i][1] + ", Nota 1: " + alunos[i][2] + ", Nota 2: " + alunos[i][3] + ", Media: " + ((alunos[i][2]+alunos[i][3])/2))
            }
        break
        default:
            console.log("Opção indisponível")
    }
}while(opcao != 5)