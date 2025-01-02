// [1, 2, 3, 4, 5] -> [[1, 2], [3, 4], 5]

function getBatches(inputList, batchCount = 3){
    outputList = [];
    subList = [];
    inputList.forEach((element, index) => {
        if (subList.length == batchCount){
            // The sublist is full
            outputList.push(subList)
            subList = [];
        }    

        // The subList still has space
        subList.push(element);
        if (index == inputList.length - 1){
            outputList.push(subList)
        }

    }
    )

    console.log(outputList);

    return outputList;
    };
console.log(getBatches([1, 2, 3, 4, 5, 6, 7, 8]))

// spread operator (...) -> Use to SPREAD all elements in an iterable

let course1 = {
    name: 'JS Course',
    instructor: 'Steven Garcia'
}

let newCourse = {
    ...course1, // Using the spread operator
    views: 542464
}

// rest operator (...) -> Use to rest elements into an interable

function multiplyArray(multiplier, ...arrayNumbers){
    return arrayNumbers.map(number => number * multiplier);
}

console.log(multiplyArray(2, 1, 2, 3, 4, 5, 6, 7, 8));

// getters and setters in objects

const course = {
    name: 'Javascript for Beginners',
    duration: '3 hours',
    get details() {
        return `${this.name} is ${this.duration}`
    },
    set details(value){
        console.log(typeof value);
        if (typeof value !== 'string'){
            throw new Error(`${value} can't be used for details, it needs to be a string`);
        }

        let parts = value.split('is');
        this.name = parts[0];
        this.duration = parts[1];
    }
}

console.log(course.details);

// Error Handling Example

try {
    course.details = 42
} catch (e) {
    console.log(`Caught Error with message: ${e.message}`)
}