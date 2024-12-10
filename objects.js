let student = {
    'name': 'bob',
    'grade': 'A',
    'age': 15
}

console.log(student);
student.age = 16;

console.log(student);
console.log(student['grade']);

function getDog(name, breed, age, weightInPounds) {

    return {
        name,
        breed,
        age,
        weightInPounds,
        eat: () => {
            console.log('Chomp!')
        },
        bark: () => {
            console.log('Woof!')
        }
    }
}

const dog = getDog('Marley', 'Chocolate Lab', 3, 60);
dog.eat();
dog.bark();
console.log(dog);

function Dog(name, breed, age, weightInPounds) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    this.eat = () => {
        console.log('Chomp!')
    }

    this.bark = () => {
        console.log('Woof!')
    }
}

const anotherDog = new Dog('Marley', 'Lab', 3, 60);
anotherDog.eat();
console.log(anotherDog);

console.log(
    'new String() =>', new String(), 
    'new Boolean() =>', new Boolean(), 
    'new Number() =>', new Number(), 
    'new Object() =>', new Object(), 
)


let a = new Object();
let b = Object.assign({randomkey: 'randomvalue'}, a);
console.log(b);
a['property1'] = 'value';
console.log(b, a);

let numbers = ['1', '2', '3', '4', '5'];
for (i of numbers){
    console.log(i);
}

let student2 = {
    name: 'rahul',
    age: 20
};
for (i in student2){
    console.log(i);
}

const keys = Object.keys(student2);
console.log('keys=', keys);

const values = Object.values(student2);
console.log('values=', values);

const entries = Object.entries(student2);
console.log('entries=', entries);

let joinedString = numbers.join('|');
console.log(joinedString, numbers.toString());
