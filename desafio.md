# Desáfio do Heroi

Nesse desafio de código por mais que pareça simples, foi um desáfio muito interessante para mim. Pois me fez sair da teoria e por em prática os conhecimentos adquiridos no curso, dando um passo muito importante para minha carreira como desenvolvedor. 

## Resolução

O desáfio consiste em entregar a mensagem final "O Herói de nome {heroi} está no nível de {nivel}"

Para o desáfio utilizei javaScript.

Primeiramente defini uma variavel vetor "herois" para guardar os nomes de todos os herois.
Em seguida defini uma variavel number "nivelXp" para guardar o nivel em numeros e também criei a variavel string "xp" para me entregar o nivel exato do heroi com base na variavel "nivelXp".

Utilizei as condicionais "if e else if" para definir os niveis sendo "<= menor ou igual ,>= maior ou igual. Retornando o Xp exato com base nivelXp.
Por exemplo:

// Estrutura de decisão para determinar o nível do herói com base no XP
 if (xp < 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
}

## Variaveis que utilizei:

let herois = ["Super Homem", "homem aranha", "Mulher Maravilha", "Flash", "hulk"]
let nivelXp = 1000

let xp;

## Por fim

Para rodar o código utilizei: 👇
### "console.log("O herói de nome " + herois [0] + " está no nivel " + xp)"