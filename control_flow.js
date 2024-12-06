// if-else

let hour = 20;
if (hour >= 5 && hour < 12) {
    console.log('Serving Breakfast');
}
else if (hour >= 12 && hour < 17) {
    console.log('Serving Lunch');
}
else {
    console.log('Serving Dinner');
}

// Swich Case Statement
let role = 'Designer'
switch (role) {
    case 'Software Engineer':
        console.log('Develops code');
        break;
    case 'Designer':
        console.log('Develops UI');
        break;
    case 'Cloud Engineer':
        console.log('Maintains and Oversees Cloud Resource Utilization');
        break;
    default:
        console.log('Interacts with customers');
        break;
}

// for loop
let numbers = [1, 2, 3, 4, 5, 6, 7];
for (let index = 0; index < numbers.length; index++) {
    console.log('Number at index', index, '=', numbers[index])
}