//Gustavo Aguiar Tenório Prazer

const prompt = require("prompt-sync")();

do{
    console.log("=== MENU PRINCIPAL ===\n1 - Analisador de Notas\n2 - Classificação de Números\n3 - Caixa Eletrônico (Notas de Dinheiro)\n4 - Pirâmide de Asteriscos com Condição\n5 - Sair")
    menu = parseInt(prompt("Insira sua escolha: "))

    switch(menu){
        case 1:
            let soma = 0
            let maior
            let menor
            let nota
            let alunos = parseInt(prompt("Insira o número de alunos: "))

            for(let i = 0; i<alunos; i++){
                nota = parseFloat(prompt("Insira a nota do aluno: "))
                if(nota<menor || menor == undefined){
                    menor = nota
                }
                if(nota>maior || maior == undefined){
                    maior = nota
                }
                soma += nota
            }

            let media = soma/alunos
            console.log("Media da turma: "+media+"\nMaior nota: "+maior+"\nMenor nota: "+menor)
        break
        case 2:
            let num
            let npz
            let poi
            let n = parseInt(prompt("Insira a quantidade de números: "))

            for(let i = 0; i<n; i++){
                num = parseInt(prompt("Insira o número: "))
                if(num % 2 == 0){
                    poi = "Par"
                }else{
                    poi = "Ímpar"
                }
                if(num<0){
                    npz = "Negativo"
                } else {
                    if(num>0){
                        npz= "Positivo"
                    } else {
                        npz = "Zero"
                    }
                }
                console.log("Número: "+num+" -> "+poi+" e "+npz)
            }
        break
        case 3:
            let n100 = 0
            let n50 = 0
            let n20 = 0
            let n10 = 0
            let n5 = 0
            let n2 = 0
            let m1 = 0
            let saque = parseInt(prompt("Insira o valor do saque: "))

            do{
                if(saque>= 100){
                    n100++
                    saque -= 100
                } else {
                    if(saque>= 50){
                        n50++
                        saque -= 50
                    } else {
                        if(saque >= 20){
                            n20++
                            saque -= 20
                        } else {
                            if(saque>= 10 ){
                                n10++
                                saque -= 10
                            }else{
                                if(saque>= 5){
                                    n5++
                                    saque -= 5
                                }else{
                                    if(saque>= 2){
                                        n2++
                                        saque -= 2
                                    } else {
                                        if(saque>= 1){
                                            m1++
                                            saque -= 1
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }while(saque != 0)

            console.log(n100+" nota(s) de 100\n"+n50+" nota(s) de 50\n"+n20+" nota(s) de 20\n"+n10+" nota(s) de 10\n"+n5+" nota(s) de 5\n"+n2+" nota(s) de 2\n"+m1+" moeda(s) de 1")
        break
        case 4:
            let n1 = parseInt(prompt("Digite um número:"));
            for (let i = 1; i <= n1; i++) {
                let simbolo = (i % 2 === 0) ? "#" : "*";
                let linha = "";

                for (let j = 1; j <= i; j++) {
                    linha += simbolo;
                }

                console.log(linha);
            }
        break
        default:
            console.log("Opção não disponível")
    }
}while(menu!=5)