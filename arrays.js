let productColors = ['Yellow', 'Red'];
console.log(productColors[productColors.length - 2]);

const numbers = [5, 4, 3, 2, 1, 3];

console.log('numbers ->', numbers);

numbers.push(7, 8, 9);
console.log('numbers.push(7, 8, 9) ->', numbers);

numbers.unshift(25, 24);
console.log('numbers.unshift(25, 24) ->', numbers);

numbers.splice(1, 2, 23, 22);
console.log('numbers.splice(1, 2, 23, 22) ->', numbers);

console.log('numbers.indexOf(3) ->', numbers.indexOf(3));
console.log('numbers.lastIndexOf(3) ->', numbers.lastIndexOf(3));

console.log('numbers.lastIndexOf(10) ->', numbers.lastIndexOf(10));

if (numbers.includes(4)) {
    console.log('4 is in the array at index', numbers.indexOf(4));
}
else {
    console.log('4 is not in the array');
}

const employees = [
    {
        id: 1,
        name: 'Jim'
    },
    {
        id: 2,
        name: 'Michael Scott'
    },
    {
        id: 3,
        name: 'Pam'
    },
    {
        id: 4,
        name: 'Dwight'
    },
]

const employee = employees.find((e) => {return e.name === 'Dwight'});
console.log(employee);

console.log('numbers', numbers);
console.log('numbers.pop() ->', numbers.pop(10));
console.log('numbers.shift() ->', numbers.shift());

// numbers.length = 0;
// console.log(numbers);

console.log('[5, 4, 3].concat(numbers) ->', [5, 4, 3].concat(numbers));
console.log('numbers.slice(0, 6)', numbers.slice(0, 6))

const exampleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];

const APlusB = [...exampleNumbersA, 9, ...exampleNumbersB, 10];
console.log('A ->', exampleNumbersA);
console.log('B ->', exampleNumbersB);
console.log('A + B ->', APlusB);
console.log('A + [9] + B + [10] ->', APlusB);

// .forEach Method
console.log('numbers ->', numbers);
numbers.forEach((number, index) => console.log(`At ${index}: ${number}`));

// .join Method
console.log('numbers ->', numbers);
console.log('numbers.join()', numbers.join());
console.log('numbers.join(" : ")', numbers.join(" : "));


// Some String Methods

let courseName = 'Node JS for Beginners';
console.log("courseName.toLowerCase().split(' ').join('-') ->", courseName.toLowerCase().split(' ').join('-'));

let characters = ['a', 'c', 'b', 'd'];
console.log('chracters ->', characters);
console.log('characters.sort() ->', characters.sort());

let employees2 = [
    { id: 1, name: 'Jen'},
    { id: 2, name: 'Steven'},
    { id: 3, name: 'Andrew'},
    { id: 4, name: 'Ted'},
];

console.log('employees2 ->', employees2);

employees2.sort((employeeA, employeeB) => {
    if (employeeA.name.toLowerCase() < employeeB.name.toLowerCase()) {
        return -1
    }
    else {
        1
    }
})

console.log('employees2 Sorted lexicographically ->', employees2);

let anotherNumbers1 = [2, 4, 6, 8];
console.log('anotherNumbers1 ->', anotherNumbers1);
console.log('anotherNumbers1.every(number => number % 2 === 0) ->', anotherNumbers1.every(number => number % 2 === 0));

let anotherNumbers = [1, 3, 5, 7, 11, 9, 321];
console.log('anotherNumbers ->', anotherNumbers);
console.log('anotherNumbers.some(number =>  number % 2 === 0) ->', anotherNumbers.some(number =>  number % 2 === 0));


let testNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('testNumbers ->',testNumbers);
console.log('testNumbers.filter(number => number % 2 === 0) ->', testNumbers.filter(number => number % 2 === 0));

let testEmployees = [
    {id: 1, name: 'Bob', role: 'Developer', email: 'BOb@gmail.com'},
    {id: 2, name: 'Ted', role: 'Designer', email: 'tEd@gmail.com'},
    {id: 3, name: 'George', role: 'Manager', email: 'gEoRGe@gmail.com'},
    {id: 4, name: 'Alice', role: 'Developer', email: 'alLcE@gmail.com'},
];
console.log('testEmployees ->',testEmployees);
console.log("testEmployees.filter(employee => employee.role == 'Developer')", testEmployees.filter(employee => employee.role == 'Developer'));

console.log('testEmployees ->',testEmployees);
console.log("testEmployees.map(employee => employee.email.toLocaleLowerCase()", testEmployees.map(employee => employee.email.toLocaleLowerCase()));

let testCharacters = ['q', 'w', 'e', 'r', 't', 'y'];
console.log('testCharacters ->',testCharacters);
console.log("testCharacters.map(char => char.toUpperCase()) ->", testCharacters.map(char => char.toUpperCase()));


console.log('testNumbers ->',testNumbers);
console.log('testNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) ->', testNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0));