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