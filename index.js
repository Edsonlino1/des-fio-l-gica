let herois = ["Super Homem", "homem aranha", "Mulher Maravilha", "Flash", "hulk"]
let nivelXp = 1000

let xp;

if (nivelXp <= 1000) {
    xp = "Ferro"
} else if (nivelXp >= 1001 && nivelXp <= 2000) {
    xp = "Bronze"
} else if (nivelXp >= 2001 && nivelXp <= 5000) {
    xp = "Prata"
} else if (nivelXp >= 5001 && nivelXp <= 7000) {
    xp = "Ouro"
} else if (nivelXp >= 7001 && nivelXp <= 8000) {
    xp = "Platina"
} else if (nivelXp >= 8001 && nivelXp <= 9000) {
    xp = "Ascendente"
} else if (nivelXp >= 9001 && nivelXp <= 10000) {
    xp = "Imortal"
} else if (nivelXp >= 10001) { 
    xp = "Radiante"
}
console.log("O herói de nome " + herois [0] + " está no nivel " + xp)
