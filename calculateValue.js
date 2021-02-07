

/**
 * Obtiene el valor que corresponde dado un numero
 * @param {Number} n 
 * @returns {Number | String} valor que corresponde
 * Multiplo de 3 => 'Music'
 * Multiplo de 5 => 'TI'
 * Multiplo de 3 y 5 => 'Musical'
 * En otro caso regresa el mismo numero
 */
function calculateValue(n) {
    let value = n

    !(n % 3) && (value = 'Music')
    !(n % 5) && (value = 'TI')
    !(n % 15) && (value = 'Musical') // minimo comun multiplo:(3,5) = 15

    return value
}


module.exports = calculateValue