console.log("Insertion Sort algorithm");

const insertionSort = (tempArray) => {
  console.log('sort started:: ',tempArray)
  const sortedArray = tempArray;

  for(let i = 1; i<= sortedArray.length - 1; i++){
    let NTI = sortedArray[i];  
    console.log('i, NTI: ',i, NTI);   // i = 1, 1:   i = 2, NTI = 10
    let j = i - 1;    
    for( ;j >= 0; j--){
        let SE = sortedArray[j];
        console.log('j, SE: ',j,SE);
        if(NTI < SE){
            sortedArray[j+1] = SE;
        }else {
            break;
        }
    }
    console.log('i, j+1',i,j+1);
    sortedArray[j+1] = NTI;
    console.log('i: ',i,sortedArray)
  }  

  return sortedArray;
}
const array = [-10,-20,23,1,5]; // [1,23,10,5,2], SE = 23
 
console.log("Array ",array," after sorting using the Insertion sort algorithm: ", insertionSort(array));
