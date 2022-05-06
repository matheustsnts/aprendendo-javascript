var agora = new Date()
var hora = agora.getHours()

if (hora < 0) {
    console.log(`Horário Inválido.`)
}

if (hora > 24) {
    console.log(`Horário Inválido.`)
}


if (hora >= 0 && hora < 12) {
    if (hora == 0) {
        console.log(`Meia-noite!`)
    } else if (hora == 1) {
        console.log(`É ${hora} hora.`)
        console.log(`Bom dia!`)
    } else {
        console.log(`São ${hora} horas.`)
        console.log(`Bom dia!`)
    }
}

if (hora == 12) {
    console.log(`Meio-dia!`)
}

if (hora > 12 && hora < 18) {
    console.log(`São ${hora} horas.`)
    console.log(`Boa tarde!`)
}

if (hora > 17 && hora < 23) {
    console.log(`São ${hora} horas.`)
    console.log(`Boa noite!`)
}

if (hora == 24) {
    console.log(`Meia-noite!`)
}