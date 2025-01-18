console.log('Linear Search Algorithm');

const findIndexOfElement = (array, num) => {

    for(let i = 0; i < array.length; i++){
        if(array[i] === num){
            return i;
        }
    }
    return -1;
}
const array = [1,4,5,6,3,2,9];
const num = 1;

console.log("Index of ",num," in the array ", array, " is: ",findIndexOfElement(array, num));
console.log("Time complexity of Linear Search algorithm is ", O(n));