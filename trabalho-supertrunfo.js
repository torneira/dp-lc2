const prompt = require("prompt-sync")()

let cartas = []
let rodando = true

while (rodando) {

    console.log("\n1 - Cadastrar carta")
    console.log("2 - Listar cartas")
    console.log("3 - Buscar primeira ocorrência")
    console.log("4 - Editar carta")
    console.log("5 - Remover carta")
    console.log("6 - Inserir várias cartas")
    console.log("7 - Marcar/Desmarcar Super-trunfo")
    console.log("0 - Sair")

    let opcao = parseInt(prompt("Escolha: "))
    let loops

    switch (opcao) {

        case 1:
            let carta = []

            do{
                let valores = prompt("Insira o nome da carta: ")
                let repetida = false
                for(let i = 0; i < cartas.length; i++){
                    for(let j = 0; j < cartas[i].length; j++){
                        if (cartas[i][j] == "Nome: " + valores) repetida = true 
                    }
                }

                if (valores.trim() !== "" && repetida === false){
                    loops = true
                    carta.push("Nome: " + valores)
                } else {
                    console.log("Adicione um valor válido")
                    loops = false
                }
            } while (loops != true)

            do{
                let valores = parseInt(prompt("Insira o ataque da carta: "))
                if (isNaN(valores)){
                    loops = false
                    console.log("Adicione um valor válido")
                } else {
                    carta.push("Ataque: " + valores)
                    loops = true
                }
            } while (loops != true)

            do{
                let valores = parseInt(prompt("Insira a defesa da carta: "))
                if (isNaN(valores)){
                    loops = false
                    console.log("Adicione um valor válido")
                } else {
                    carta.push("Defesa: " + valores)
                    loops = true
                }
            } while (loops != true)

            do{
                let valores = parseInt(prompt("Insira a velocidade da carta: "))
                if (isNaN(valores)){
                    loops = false
                    console.log("Adicione um valor válido")
                } else {
                    carta.push("Velocidade: " + valores)
                    loops = true
                }
            } while (loops != true)

            do{
                let valores = parseInt(prompt("É Super-trunfo?\n1 - SIM\n2 - NÃO\nResposta: "))
                if (isNaN(valores) || (valores !== 1 && valores !== 2)){
                    loops = false
                    console.log("Adicione um valor válido")
                } else {
                    if (valores === 1) {
                        for (let i = 0; i < cartas.length; i++) {
                            for (let j = 0; j < cartas[i].length; j++) {
                                if (cartas[i][j] === "Super-trunfo") cartas[i][j] = "Não é Super-trunfo"
                            }
                        }
                        carta.push("Super-trunfo")
                    } else {
                        carta.push("Não é Super-trunfo")
                    }
                    loops = true
                }
            } while (loops != true)

            cartas.push(carta)
        break

        case 2:
            console.log("========== Cartas cadastradas ==========")
            for(let i = 0; i < cartas.length; i++){
                console.log("indice " + i + ": " + cartas[i])
            }
        break

        case 3:
            let busca = prompt("Digite o nome da carta que deseja procurar: ")
            let encontrada = false

            for (let i = 0; i < cartas.length; i++) {
                let nomeCompleto = cartas[i][0]  
                let nome = nomeCompleto.replace("Nome: ", "")

                if (nome === busca) {
                    console.log("=== Carta encontrada ===")
                    console.log("Índice:", i)

                    for (let j = 0; j < cartas[i].length; j++) {
                        console.log(cartas[i][j])
                    }
                    encontrada = true
                    break 
                }
            }

            if (!encontrada) console.log("Carta não encontrada.")
        break

        case 4:
            let indiceE = parseInt(prompt("Digite o índice da carta para editar: "))

            if (isNaN(indiceE) || indiceE < 0 || indiceE >= cartas.length) {
                console.log("Índice inválido.")
            } else {

                let cartaE = cartas[indiceE]
                console.log("Valores atuais:")
                cartaE.forEach(v => console.log(v))

                let novoNome = prompt("Novo nome: ")
                if (novoNome.trim() !== "") cartaE[0] = "Nome: " + novoNome

                let novoAtk = prompt("Novo ataque: ")
                if (novoAtk.trim() !== "") cartaE[1] = "Ataque: " + novoAtk

                let novoDef = prompt("Nova defesa: ")
                if (novoDef.trim() !== "") cartaE[2] = "Defesa: " + novoDef

                let novaVel = prompt("Nova velocidade: ")
                if (novaVel.trim() !== "") cartaE[3] = "Velocidade: " + novaVel

                let novoST = prompt("É Super-trunfo? (1=Sim / 2=Não / vazio=manter): ")

                if (novoST.trim() !== "") {
                    if (novoST === "1") {
                        for (let i = 0; i < cartas.length; i++) {
                            for (let j = 0; j < cartas[i].length; j++) {
                                if (cartas[i][j] === "Super-trunfo") cartas[i][j] = "Não é Super-trunfo"
                            }
                        }
                        cartaE[4] = "Super-trunfo"
                    } else if (novoST === "2") {
                        cartaE[4] = "Não é Super-trunfo"
                    }
                }
            }
        break

        case 5:
            let indiceR = parseInt(prompt("Digite o índice da carta que deseja remover: "))

            if (isNaN(indiceR) || indiceR < 0 || indiceR >= cartas.length) {
                console.log("Índice inválido.")
            } else {
                cartas.splice(indiceR, 1)
                console.log("Carta removida.")
            }
        break

        case 6:
            let entrada = prompt("Insira as cartas: ")
            let listaCartas = entrada.split("|")

            for (let i = 0; i < listaCartas.length; i++) {
                let cardString = listaCartas[i].trim()
                let dados = cardString.split(";")
                if (dados.length < 5) continue

                let nome = dados[0].trim()
                let ataque = dados[1].trim()
                let defesa = dados[2].trim()
                let velocidade = dados[3].trim()
                let superT = dados[4].trim().toUpperCase()

                let cartaNova = [
                    "Nome: " + nome,
                    "Ataque: " + ataque,
                    "Defesa: " + defesa,
                    "Velocidade: " + velocidade,
                    superT === "S" ? "Super-trunfo" : "Não é Super-trunfo"
                ]

                if (superT === "S") {
                    for (let k = 0; k < cartas.length; k++) {
                        for (let j = 0; j < cartas[k].length; j++) {
                            if (cartas[k][j] === "Super-trunfo") cartas[k][j] = "Não é Super-trunfo"
                        }
                    }
                }

                cartas.push(cartaNova)
            }

            console.log("Cartas inseridas.")
        break

        case 7:
            console.log("1 - Marcar Super-trunfo")
            console.log("2 - Desmarcar Super-trunfo")
            let opST = parseInt(prompt("Escolha: "))
            let indiceST = parseInt(prompt("Índice da carta: "))

            if (isNaN(indiceST) || indiceST < 0 || indiceST >= cartas.length) {
                console.log("Índice inválido.")
            } else {
                if (opST === 1) {
                    for (let i = 0; i < cartas.length; i++) {
                        for (let j = 0; j < cartas[i].length; j++) {
                            if (cartas[i][j] === "Super-trunfo") cartas[i][j] = "Não é Super-trunfo"
                        }
                    }
                    cartas[indiceST][4] = "Super-trunfo"
                } else if (opST === 2) {
                    if (cartas[indiceST][4] === "Super-trunfo") cartas[indiceST][4] = "Não é Super-trunfo"
                }
            }
        break

        case 0:
            rodando = false
        break

        default:
            console.log("Opção inválida.")
    }
}

console.log("Saindo...")
