const isValidParenthesis = (str) => {
    let obj = {
        '{': 0,
        '}': 0,
        '[': 0,
        ']': 0,
        '(': 0,
        ')': 0,
    };

    for(let i = 0; i < str.length; i++){
        if(obj[str[i]]){
            obj[str[i]]++
        }
    }

    return obj;
}

let str = "()[({})]({[]})";

console.log(isValidParenthesis(str));