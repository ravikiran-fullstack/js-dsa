console.log("Is the given number a power of 2");

const isPowerOf2 = (n) => {

    if(n < 1){
        return false;
    }

    if(n == 1){
        return true;
    }

    if(n%2 !== 0){
        return false;
    }

    return isPowerOf2(n/2);
}

const isPowerOfTwoBitwise = (n) => {
    if(n < 1){
        return false;
    }

    return (n & (n - 1)) === 0;
}
let num = 1024;
console.log("is the num =", num, " power of 2", isPowerOfTwoBitwise(num));