/**
 * Prints all the even numbers in array
 *
 * @param {Array} numbers - A list of numbers.
 */
function logEven(numbers) {
    for (let number of numbers) {
        if (number % 2 == 0) {
            console.log(number);
        }
    }
}   

/**
 * Prints all the odd numbers in array
 *
 * @param {Array} numbers - A list of numbers.
 */
function logOdd(numbers) {
    for (let number of numbers) {
        if (number % 2 != 0) {
            console.log(number);
        }
    }
}   

numbers = [2, 3, 5, 6, 7, 213, 5432, 123, 64]

// Testing our functions
console.log(logEven(numbers));
console.log(logOdd(numbers));