console.log("factorial series is a series where each number is the product of all the numbers from 1 to that number");


const n = 4;

// const findFactorialSeries = (n) => {
//     let result;
//     const calculate = (n) => {
//         if(n === 0 || n === 1){
//             result = 0;
//             return 1;
//         }
//         result = n * calculate(n-1); 
//         return result;  
//     } 
//     calculate(n);
//     return result;
// }

const findFactorialSeries = (n) => {
    let result = 1;
    for(let i = 2; i <= n; i++){
        result = result * i;
    }

    return result;
}

console.log("Factorial of n = 4 ",findFactorialSeries(0));