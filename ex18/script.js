let num = document.querySelector('input#txtlist')
let lista = document.querySelector('select#add')
let res = document.querySelector('div#res')
let valores = []

// Se é número
function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Se o número está na lista
function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// Adiciona o número após o clique
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ``
    num.focus()
    
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de FINALIZAR!')
    } else {
        let total = valores.length
        res.innerHTML = ''
        if (total == 1) {
            let soma = 0
            res.innerHTML += `Ao todo, temos apenas ${total} número.<br><br>`
            res.innerHTML += `O maior valor informado foi o ${Math.max(...valores)}.<br><br>`
            res.innerHTML += `O menor valor informado foi o ${Math.min(...valores)}.<br><br>`
            for (let i = 0; i < total; i++) {
                soma += valores[i]
            }
            res.innerHTML += `Somando todos os valores, temos ${soma}.<br><br>`
            let media = (soma/total)
            res.innerHTML += `A média de todos os valores digitados é ${media}.<br><br>`

        }
        else {
            let soma = 0
            res.innerHTML += `Ao todo, temos ${total} números.<br><br>`
            res.innerHTML += `O maior valor informado foi o ${Math.max(...valores)}.<br><br>`
            res.innerHTML += `O menor valor informado foi o ${Math.min(...valores)}.<br><br>`
            for (let i = 0; i < total; i++) {
                soma += valores[i]
            }
            res.innerHTML += `Somando todos os valores, temos ${soma}.<br><br>`
            let media = (soma/total)
            if (Number.isInteger(media)) {
                res.innerHTML += `A média de todos os valores digitados é ${media}.<br><br>`
            } else {
                res.innerHTML += `A média de todos os valores digitados é ${media.toFixed(2).replace(".",",")}.<br><br>`
            }
            

        }
    }
}