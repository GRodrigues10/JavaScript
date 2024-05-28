//ERRO DE ESTOURO DE PILHA, POIS NÃO FOI DEFINIDO UMA CONFIÇÃO DE PARADA!
function fat(n){
    return n * fat(n-1)
}
console.log(fat(5))