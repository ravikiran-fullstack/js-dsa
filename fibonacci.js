console.log(
  "Fibonacci series is a series where each number is sum of last two numbers"
);

//Problem statement: Given the number 'n', Find the first 'n' elements of the Fibonacci series

const n = 10;

const findFibonacciSeries = (n) => {
  const fibonacciSeries = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      fibonacciSeries.push(0);
    } else if (i === 1) {
      fibonacciSeries.push(1);
    } else {
      fibonacciSeries.push(fibonacciSeries[i - 1] + fibonacciSeries[i - 2]);
    }
  }

  return fibonacciSeries;
};

const findNthFibonacciNumber = (n) => {
  // console.log('n',n);
  // if(n === 0){
  //   return 0;
  // }
  // if(n === 1){
  //   return 1;
  // }

  if (n < 2) {
    return n;
  }

  return findNthFibonacciNumber(n - 1) + findNthFibonacciNumber(n - 2);
};
let num = 6;
console.log(
  "fibonacciSeries first ",
  num,
  " numbers :: ",
  findFibonacciSeries(num)
);
// console.log("Time complexity of this problem is O(n)");

console.log("nth ", findNthFibonacciNumber(num));
