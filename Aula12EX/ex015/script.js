function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtiano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] - Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/bebêhomem.jpg')
            }else if(idade <= 21){
                img.setAttribute('src','imagens/jovemhomem.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src','imagens/adultohomem.jpg')
            }
            else{
                img.setAttribute('src','imagens/idoso.jpg')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'

            if(idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/bebêmulher.jpg')
            }else if(idade <= 21){
                img.setAttribute('src','imagens/jovemmulher.jpg')
            }
            else if(idade < 50){
                img.setAttribute('src','imagens/adultamulher.jpg')
            }
            else{
                img.setAttribute('src','imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade}.`
        res.appendChild(img)
    }
}
