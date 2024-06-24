import input from 'readline-sync'

let calc = [
    {id: 1, Nome: "Divisao"},
    {id: 2, Nome: "Soma"},
    {id: 3, Nome: "Subtracao"},
    {id: 4, Nome: "Multiplicacao"},
    {id: 5, Nome: "Sair"}
]

console.log("---Calculadora---\n")
for (let calculo of calc){
    console.log(calculo.id + " : " + calculo.Nome + "\n")
    
}


while (true == true){
    let calculadora = input.question("Digite qual o seu tipo de operacao: ")
    if(calculadora == calc[0].id){
    
        let divisao1 = input.question("Digite um número: ")
        let divisao2 = input.question("Digite outro número: ")
        let resultado1 = divisao1 / divisao2
        if (divisao2 == 0){
            console.log("Divisão por zero não é permitido")
        }
        else {
        console.log("*************************************")
        console.log("O número " + divisao1 + " / " + divisao2 + " é igual a : " + resultado1)
        console.log("*************************************")}
      
    }

  

    else if (calculadora == calc[1].id){
        let soma1 = input.question("Digite um número: ")
        let soma2 = input.question("Digite outro número: ")
        let resultado2 = Number(soma1) + Number(soma2)
        console.log("*************************************")
        console.log("O número " + soma1 + " + " + soma2 + " é igual a : " + resultado2)
        console.log("*************************************")
      
    }

    else if (calculadora == calc[2].id){
        let subtracao1 = input.question("Digite um número: ")
        let subtracao2 = input.question("Digite outro número: ")
        let resultado3 = subtracao1 - subtracao2
        console.log("*************************************")
        console.log("O número " + subtracao1 + " - " + subtracao2 + " é igual a : " + resultado3)
        console.log("*************************************")
        
    }
    else if (calculadora == calc[3].id){
        let multiplicacao1 = input.question("Digite um número: ")
        let multiplicacao2 = input.question("Digite outro número: ")
        let resultado4 = multiplicacao1 * multiplicacao2
        console.log("*************************************")
        console.log("O número " + multiplicacao1 + " x " +multiplicacao2+ " é igual a : " +resultado4)
        console.log("*************************************")
       
    }

    else if (calculadora == calc[4].id){
        console.log("Saindo.....")
        break
    }

    else{
        console.log("*************")
        console.log("Invalido!!!\nDigite o numero correto")
        console.log("*************")

    }

    console.log("\n---Calculadora---")
    for (let calculo of calc){
       console.log("\n" + calculo.id + " : " + calculo.Nome)
    }
}

