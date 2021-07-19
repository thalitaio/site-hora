function carregar(){
    var mensagem = window.document.getElementById('mensagem')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    
    mensagem.innerHTML = `Agora são ${hora}:${minuto}  horas. &#8986;`

    if (hora >= 0 && hora < 12) {
        img.innerHTML = '<img src="imagens/manha.jpg">'
        document.body.style.background = '#afd9f5'
    } else if (hora >= 12 && hora < 18) {
        img.innerHTML = '<img src="imagens/tarde.jpg">' 
        document.body.style.background = '#df5d2e'
    } else {
        img.innerHTML = '<img src="imagens/noite.jpg">' 
        document.body.style.background = '#4f4c6e'
    }

}