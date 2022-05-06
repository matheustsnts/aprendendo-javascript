function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var hora = Number(window.prompt('Que horas são?'))
    //var minuto = data.getMinutes()
    //var segundo = data.getSeconds()
    if (Number.isInteger(hora)) {
        if (hora >= 0 && hora < 12) {
            // BOM DIA
            img.src = 'imagens/fotomanha.png'
            document.body.style.background = '#d5bc89'
            if (hora == 0 || hora == 1) {
                msg.innerHTML = `Agora é ${hora} hora da manhã`
            } else {
                msg.innerHTML = `Agora são ${hora} horas da manhã`
            }
        } else if (hora >= 12 && hora < 18) {
            // BOA TARDE
            img.src = 'imagens/fototarde.png'
            document.body.style.background = '#bc5b34'
            msg.innerHTML = `Agora são ${hora} horas da tarde`
        } else if (hora >= 18 && hora <= 24){
            // BOA NOITE
            img.src = 'imagens/fotonoite.png'
            document.body.style.background = '#1c1c1c'
            msg.innerHTML = `Agora são ${hora} horas da noite`
        } else if (hora < 0 || hora > 24) {
            alert('Hora inválida!')
        }
    } else {
         alert('Hora inválida!')
    } 
}

