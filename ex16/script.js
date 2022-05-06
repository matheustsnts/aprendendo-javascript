function verificar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.querySelector('div#res')
    

    if (Number(inicio.value.length) == 0 || Number(fim.value.length) == 0 || Number(passo.value.length) == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = `Impossivel contar!`
    } else {
        res.innerHTML = `Contando:<br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            window.alert('Passo inválido, considerando PASSO 1')
            p = 1
        } else if (p < 0) {
            window.alert(`PASSO ${p} inválido. Considerando PASSO ${p*(-1)}`)
            p *= (-1)
        }

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}