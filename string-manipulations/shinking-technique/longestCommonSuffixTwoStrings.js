const longestCommonSuffixTwoStrings = (str1, str2) => {
    if(str1.length === 0 || str2.length === 0){
        return "";
    }

    let suffixArr = [];
    let index1 = str1.length - 1;
    let index2 = str2.length - 1;

    while(index1 >= 0 && index2 >= 0 && str1[index1] === str2[index2]){
        suffixArr.push(str1[index1])
        index1--;
        index2--;
    }

    return suffixArr.reverse().join('');
}

console.log(longestCommonSuffixTwoStrings("running", "jogging"));