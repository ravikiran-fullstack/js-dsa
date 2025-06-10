const longestCommonSuffix = (strs) => {
    if(strs.length === 0){
        return "";
    }

    let suffix = strs[0];

    for(let i = 1; i < strs.length; i++){
        while(!strs[i].endsWith(suffix)){
        //while(strs[i].indexOf(suffix) < 0 ){
            suffix = suffix.slice(1);
            
            if(suffix.length === 0){
                return ""
            }
        }
    }

    return suffix;
}

console.log(longestCommonSuffix(["running", "jogging", "swing"]));