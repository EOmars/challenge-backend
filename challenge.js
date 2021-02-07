/**
 * CHALLENGE BACKEND.
 */

const calculateValue = require("./calculateValue")

const limit = 100;

(function simpleRecursion(n) {
    if (n > limit) return

    console.log(calculateValue(n))
    simpleRecursion(n + 1)
})(1)



