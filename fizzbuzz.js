/**
 * Returns the maximum of 2 numbers.
 *
 * @param {number} num - The number to evaluate.
 * @returns {number | string} runs fizzbuzz on number and returns value.
 */
function fizzBuzz(num) {
    if (num % 15 == 0) {
        return 'FizzBuzz'
    }

    else if (num % 5 == 0) {
        return 'Buzz'
    }

    else if (num % 3 == 0) {
        return 'Fizz'
    }

    else {
        return num
    }
}   

// Testing our function
console.log(fizzBuzz(50));
console.log(fizzBuzz(30));
console.log(fizzBuzz(9));
console.log(fizzBuzz(7));