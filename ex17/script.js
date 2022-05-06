function verificar() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('tabuada')
    
    if (num.value.length == 0) {
        window.alert(`Por favor, digite um número!`)
    } else {
        let n = Number(num.value)
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            item.appendChild(item)
        }
    }

   
}