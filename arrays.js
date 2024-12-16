let productColors = ['Yellow', 'Red'];
console.log(productColors[productColors.length - 2]);

const numbers = [5, 4, 3, 2, 1, 3];

console.log('numbers ->', numbers);

numbers.push(7, 8, 9);
console.log('numbers.push(7, 8, 9) ->', numbers);

numbers.unshift(25, 24);
console.log('numbers.unshift(25, 24) ->', numbers);

numbers.splice(1, 2, 23, 22);
console.log('numbers.splice(1, 0, 25, 24) ->', numbers);

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