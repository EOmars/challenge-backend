

const calculateValue = require('./calculateValue')

const limit = 100
const MULTIPLE3 = 'Music'
const MULTIPLE5 = 'TI'
const MULTIPLE15 = 'Musical'

for (let i = 1; i <= limit; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        testValue(i, MULTIPLE15)
        continue
    }

    if (i % 5 === 0) {
        testValue(i, MULTIPLE5)
        continue
    }

    if (i % 3 === 0) {
        testValue(i, MULTIPLE3)
        continue
    }

    testValue(i, i)
}


/**
 * Verifica que se obtengan los valores esperados
 * @param {Number} value 
 * @param {String | Number} expected 
 */
function testValue(value, expected) {
    test(`${value} => ${expected}`, () => {
        expect(calculateValue(value)).toBe(expected)
    })
}