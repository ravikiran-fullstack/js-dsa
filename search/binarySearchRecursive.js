console.log("Binary Search Algorithm - recursive");
console.log("find the index of an element in a sorted array");

const binarySearch = (sortedArray, leftIndex, rightIndex, num) => {
  if (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2); // 

    if (sortedArray[middleIndex] === num) {
        console.log('sortedArray:: ',sortedArray[middleIndex], middleIndex, num);
      return middleIndex;
    }
    if (num < sortedArray[middleIndex]) {
      rightIndex = middleIndex - 1; // 2 - 1 = 1
      return binarySearch(sortedArray, leftIndex, rightIndex, num);
    } else {
      leftIndex = middleIndex + 1; // 1
      return binarySearch(sortedArray, leftIndex, rightIndex, num);
    }
  }

  return -1;
};

const sortedArray = [-5, 1, 2, 4, 6, 10];
const leftIndex = 0;
const rightIndex = sortedArray.length - 1;
const num = 6;

console.log(
  "Index of ",
  num,
  " in the array ",
  sortedArray,
  " is: ",
  binarySearch(sortedArray, leftIndex, rightIndex, num)
);
console.log("Time complexity of Linear Search algorithm is ", O(log(n)));

