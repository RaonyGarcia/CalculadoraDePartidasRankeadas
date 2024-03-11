/* 
    Foi criado uma função chamada "nível" dentro dela esta uma estrutura condicional "if, else if e else" 
    dependendo do resultado da subtração, vai me dizer o saldo de vitórias e qual o nível dele.

*/

function nivel(){
    if (saldoDeVitorias <= 10){
        console.log("O Herói tem de saldo "+ saldoDeVitorias +" vitorias e está no nível de FERRO.")
    
    }
    else if(saldoDeVitorias <= 20){
        console.log("O Herói tem de saldo "+ saldoDeVitorias + " vitorias e está no nível de BRONZE.")
    
    }
    else if(saldoDeVitorias <= 50){
        console.log("O Herói tem de saldo "+ saldoDeVitorias + " vitorias e está no nível de PRATA.")
    
    }
    else if(saldoDeVitorias <= 80){
        console.log("O Herói tem de saldo "+ saldoDeVitorias + " vitorias e está no nível de OURO.")
    
    }
    else if(saldoDeVitorias <= 90){
        console.log("O Herói tem de saldo "+ saldoDeVitorias + " vitorias e está no nível de DIAMANTE.")
    
    }
    else if(saldoDeVitorias <= 100){
        console.log("O Herói tem de saldo "+ saldoDeVitorias +" vitorias e está no nível de LENDÁRIO.")
    
    }
    else{
        console.log("O Herói tem de saldo "+ saldoDeVitorias +" vitorias e está no nível de IMORTAL.")
    
    }

}

/*
    Foi criado duas variáveis chamada "vitorias" e "derrotas" 
    e uma constante com o nome de "saldoDeVitorias" que vai pegar os valores das duas variáveis 
    e vai fazer uma subtração.
*/
let vitorias = 15
let derrotas = 5
const saldoDeVitorias = vitorias - derrotas

/*
    Vai ser chamada a função "nível" e vai ser adicionado
    o valor da constante "saldoDeVitorias" como parâmetro e assim vai ser executado a estrutura condicional 
    que vai me dizer o saldo de vitórias e o nível do herói. 
*/
nivel(saldoDeVitorias)

