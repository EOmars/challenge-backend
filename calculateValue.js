

/**
 * Obtiene el valor que corresponde dado un numero
 * @param {Number} n 
 * @returns {Number | String} valor que corresponde
 * Multiplo de 3 => 'Music'
 * Multiplo de 5 => 'TI'
 * Multiplo de 3 y 5 => 'Musical'
 * En otro caso regresa el mismo numero
 */
function calculateValueOld(n) {
    let value = n

    !(n % 3) && (value = 'Music')
    !(n % 5) && (value = 'TI')
    !(n % 15) && (value = 'Musical') // minimo comun multiplo:(3,5) = 15

    return value
}

/**
 * Otra implementacion usando solo un if
 * @param {Number} n
 * @returns {Number | String} 
 */
function calculateValue(n) {
    if (!(n % 3) || !(n % 5)) {
        const values = ['Music', 'TI', 'Musical']

        // Si n es multiplo de ambos(15) 
        //       Number(!(n % 15) = 1 * 2 = 2
        //       Number(n % 3 > 0) = 0
        // Si n no es multiplo de ambos(3 y 5)
        //      Number(!(n % 15) = 0
        //      Number(n % 3 > 0) = 
        //                          0 si es multiplo de 3
        //                          1 si es multiplo de 5
        const index = (Number(!(n % 15)) * 2) + Number(n % 3 > 0)
        return values[index]
    }
    return n
}


module.exports = calculateValue