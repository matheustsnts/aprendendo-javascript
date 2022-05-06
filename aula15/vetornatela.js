let valores = [8,7,1,4,2,9]
valores.sort()

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*for (i = 0; i < valores.length; i++) {
    console.log(`A posição ${i+1} tem o valor ${valores[i]}`)
}
*/

for (let i in valores) {
    console.log(`A posição ${Number(i)+1} tem o valor ${valores[i]}`)
}