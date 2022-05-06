// Função fatorial com várias possibilidades
function fatorial(n) {
    if (typeof n == 'string') {
        return 'Inexistente.'
    } else {
        if (n % 1 == 0) {
            if (n == 0 || n == 1) {
                return 1
            } else if (n < 0) {
                return "Não existe fatorial de números negativos."
            } else {
                return n * fatorial(n-1)
            }
        } else {
            return "Não existe fatorial de números decimais."
        }
    }
}

console.log(fatorial(3))