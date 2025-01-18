console.log("Bubble Sort algorithm");

const bubbleSort = (sortedArray) => {

    for(let i = 0; i < sortedArray.length; i++){
        for(let j = 0; j < sortedArray.length - i; j++){
            if(sortedArray[j] > sortedArray[j+1]){
                const temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1 ] = temp;
            }
        }
        console.log('array',array);
    }
    return sortedArray;
}

const bubbleSortSwapFlag = (sortedArray) => {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i< sortedArray.length - 1; i++){
            if(sortedArray[i] > sortedArray[i+1]){
                let temp = sortedArray[i];
                sortedArray[i] = sortedArray[i+1];
                sortedArray[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped)

    return sortedArray;
}

const array = [10, 7, 4, 2, 1, -5];

// console.log("Array ",array," after sorting using the bubble sort algorithm", bubbleSort(array));
console.log("Array ",array," after sorting using the bubble sort algorithm with swap flag", bubbleSortSwapFlag(array));
