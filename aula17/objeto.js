let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.4,
engordar(p=0) {
   this.peso += p
   if (p > 0) {
       console.log(`Engordou ${p} Kg.`)
   } else if (p < 0) {
        console.log(`Perdeu ${p*(-1)} Kg.`)
   } else {
       console.log(`Manteve o peso atual`)
   }
    
}}
amigo.engordar(-2.5)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`)