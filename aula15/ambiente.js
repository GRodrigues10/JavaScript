let num = [4, 5, 5 ,6 ,4]
num.push(7)

console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem o tamanho ${num.length}`)
console.log(`Nosso vetor ordenado é ${num.sort()}`)
let pos = num.indexOf(6)
if(pos == -1){
    console.log('O valor não foi encontrado!')
}
else{
    console.log(`O valor 6 está na posição ${pos}`)
}

