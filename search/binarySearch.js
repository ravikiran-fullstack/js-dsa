console.log("Binary Search Algorithm");
console.log('find the index of an element in a sorted array');


// const binarySearch = (sortedArray, num) => {
//     if(sortedArray.length === 0){
//         return -1;
//     }

//     const middleIndex = Math.floor(sortedArray.length / 2);
//     console.log('middleIndex::',middleIndex)
//     if( num <= sortedArray[middleIndex]){
//         for(let i = 0; i < middleIndex; i++){
//             if(sortedArray[i] === num){
//                 return i;
//             }
//         }
//     } else {
//         for(let i = middleIndex; i < sortedArray.length; i++){
//             if(sortedArray[i] === num){
//                 return i;
//             }
//         }
//     }

//     return -1;
// }

const binarySearch = (sortedArray, num) => {
    if(sortedArray.length === 0){
        return -1;
    }

    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2); // 2

        if(sortedArray[middleIndex] === num){ // [2] = 2, num = 1
            return middleIndex;
        }

        if(num < sortedArray[middleIndex]){  
            rightIndex = middleIndex - 1;  // 2 - 1 = 1
        } else {
            leftIndex = middleIndex + 1;  // 1
        }
    }

    return -1;
}

const sortedArray = [-5,1,2,4,6,10];
const num = 6;

console.log("Index of ",num," in the array ", sortedArray, " is: ",binarySearch(sortedArray, num));
// console.log("Time complexity of Linear Search algorithm is ", O(n));
