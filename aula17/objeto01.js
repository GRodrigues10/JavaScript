let amigo = {nome:'Gabriel', sexo:'M', peso: 84, engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}
amigo.engordar(2)
console.log(`O ${amigo.nome} pesa ${amigo.peso}kg`)