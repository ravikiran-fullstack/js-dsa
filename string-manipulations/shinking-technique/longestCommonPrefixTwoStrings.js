/*const longestCommonPrefixTwoStrings = (str1, str2) => {
  if (str1 === str2) {
    return str1;
  }

  // this is wrong
  if(!str1.includes(str2) && !str2.includes(str1)){
    return "";
  }

  let prefix = str1;

  while (!str2.startsWith(prefix)) {
    prefix = prefix.slice(0, -1);
    if (prefix.length === 0) {
      return "";
    }
  }

  return prefix;
};*/

const longestCommonPrefixTwoStrings = (str1, str2) => {
  if (str1 === str2) {
    return str1;
  }

  let i = 0;
  while (i < str1.length && i < str2.length && str1[i] === str2[2]) {
    i++;
  }

  return str1.slice(0, i);
};

console.log(longestCommonPrefixTwoStrings("interstellar", "internet"));
