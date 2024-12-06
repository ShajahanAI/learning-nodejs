let x = 1;

// Arithmetic Operators

console.log(++x) // prints 2
console.log(--x) // prints 1
console.log(x / 2) // prints 0.5
console.log(x * 2) // prints 2

x = 5;
console.log(x ** 2) // prints 25
console.log(x % 3) // prints 2

// Assignment Operator

let programmingLanguage = 'NodeJS';

// Comparison Operator

let num1 = 15;
let num2 = 10;

let isNum1LessThanNum2 = num1 < num2;
let isNum1GreaterThanNum2 = num1 > num2;

console.log('isNum1LessThanNum2', isNum1LessThanNum2);
console.log('isNum1GreaterThanNum2', isNum1GreaterThanNum2);


// Equality Operators

console.log(1 == '1') // Loose Equality
console.log(1 === '1') // Strict Equality


// Terneray Operator
let age = 18;
let canDrive = age >= 18 ? true : false;

console.log(`A person of ${age} ${canDrive ? 'can': 'cannot'} drive.`)

// Logical Operator(s)

// OR ||&
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);

// AND &
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

// NOT !
console.log(!true)
console.log(!false)

// Nullish coalescing ??

console.log(null ?? true)


console.log()