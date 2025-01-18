console.log("Find if a given number is prime or not");

// const isPrime = (num) => {
//   if (num === 2) {
//     return true;
//   }

//   if (num < 2 || (num > 2 && num % 2 === 0)) {
//     return false;
//   } else {
//     let count = 3;
//     while (count < num){
//         if(num % count === 0){
//             return false;
//         }
//         // console.log('count',count);
//         count += 2;
//     }
//     return true;
//   }
// };

const isPrime = (num) => {
    if (num === 2) {
      return true;
    }
  
    if (num < 2 || (num > 2 && num % 2 === 0)) {
      return false;
    } else {
      for(let i = 3; i < Math.sqrt(num); i++){
        console.log('i',i);
        if(num % i === 0){
            return false;
        }
      }
      return true;
    }
  };

console.log("is 71 a prime number", isPrime(71));
