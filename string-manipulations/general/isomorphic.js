// const isIsomorphic = function(s, t) {
//     const original = s;

//     let obj = {
//     }

//     for(let i = 0; i < s.length; i++){

//         if(obj[s[i]][t[i]] > 1){
//             return false;
//         } else {
//             let temp = t.charAt(i);
//             console.log('temp',temp)
//             obj[s[i]][temp] =  1;
//             console.log(obj);
//         }
//         // obj[s[i]] = t[i];
//     }

//     console.log(obj);
// };

const isIsomorphic = function (s, t) {
  let objS = {};

  let objT = {};

  for (let i = 0; i < s.length; i++) {
    const c1 = s[i];
    const c2 = t[i];

    // console.log(c1, c2);
    if (objS[c1] && objS[c1] !== c2) {
      return false;
    }

    if (objT[c2] && objT[c2] !== c1) {
      return false;
    }

    objS[c1] = c2;
    objT[c2] = c1;
  }

  // console.log(objS, objT);
  return true;
};

console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("aa", "ab"));
console.log(isIsomorphic("foo", "bar"));
