console.log("Hello DSA");

const person = {
    "firstName": "Ravikiran",
    "lastName": "Yadava"
}

console.log("Person Object: ", person);
console.log("Big O of different operations on objects: ");
console.log("Accessing a property: O(1)"); // In case of accessing, we need to iterate over all the properties of an object to find the required property
console.log("Inserting a property: O(1)"); // In case of inserting, we need to iterate over all the properties of an object to find the required property
console.log("Deleting a property: O(1)"); // In case of deleting, we need to iterate over all the properties of an object to find the required property
console.log("Searching a property: O(n)"); // In case of searching, we need to iterate over all the properties of an object to find the required property


console.log("Object.keys(person): ", Object.keys(person), ", O(n) time complexity"); 
console.log("Object.values(person): ", Object.values(person), ", O(n) time complexity");
console.log("Object.entries(person): ", Object.entries(person), ", O(n) time complexity");
console.log("-----------------------------------------------------------------");
const odd = [1,3,5,7,9];
console.log("odd Array: ",odd);
console.log("Time complexity of inserting or deleting an element at the end of array is : O(1)");
console.log("Time complexity of inserting or deleting an element at beginning of array is : O(n)");
console.log("Time complexity of accessing an element at any location is array is : O(1)");
console.log("Time complexity of searching an element at any location is array is : O(n)");
console.log("Time complexity of push or pop operation in array is : O(1)");
console.log("TIme complexity of shift or unshift or concat or slice or splice in array is : O(n)");
console.log("Time complexity of forEach or map or find or filter or reduce in array is : O(n)");