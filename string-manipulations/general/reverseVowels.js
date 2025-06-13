// var reverseVowels = function (s) {
//   let vowelsObj = {
//     a: "a",
//     e: "e",
//     i: "i",
//     o: "o",
//     u: "u",
//   };

//   let vowels = [];
//   let p1 = 0;
//   let p2 = s.length - 1;
//   let v1 = "";
//   let v2 = "";

//   if (vowelsObj[s[p1].toLowerCase()]) {
//     v1 = s[p1];
//   }

//   if (vowelsObj[s[p2].toLowerCase()]) {
//     v2 = s[p2];
//   }

//   while (p1 < p2) {
//     let isLetter1Vowel = vowelsObj[s[p1].toLowerCase()] ? true : false;
//     let isLetter2Vowel = vowelsObj[s[p2].toLowerCase()] ? true : false;

//     if (vowelsObj[s[p1].toLowerCase()]) {
//       v1 = s[p1];
//     }

//     if (vowelsObj[s[p2].toLowerCase()]) {
//       v2 = s[p2];
//     }

//     if (v2 && isLetter1Vowel) {
//       s = s.slice(0, p1) + v2 + s.slice(p1 + 1);
//       v2 = "";
//     }

//     if (v1 && isLetter2Vowel) {
//       s = s.slice(0, p2) + v1 + s.slice(p2 + 1);
//       v1 = "";
//     }

//     // console.log(p1,'v1', v1, '----', v2, p2);
//     // console.log(s);
//     p1++;
//     p2--;
//   }

//   return s;
// };

// // const s = "IceCreAm";
// const s = "leetcode";
// console.log("expected Answer :: leotcede", reverseVowels(s));
// console.log("expected Answer :: AceCreIm", reverseVowels("IceCreAm"));


var reverseVowels = function (s) {
  let vowelsSet = new Set(["a", "e", "i", "o", "u"]);

  let p1 = 0;
  let p2 = s.length - 1;
  let arr = s.split("");

  while (p1 < p2) {
    while(p1 < p2 && !vowelsSet.has(s[p1])){
      p1++;
    }
    while(p1 < p2 && !vowelsSet.has(s[p2])){
      p2--;
    }

    [arr[p1], arr[p2]] = [arr[p2], arr[p1]];
    p1++;
    p2--;
  }

//   console.log("s",arr.join());

  return arr.join("");
};

console.log("expected Answer :: leotcede", reverseVowels(s));
console.log("expected Answer :: AceCreIm", reverseVowels("IceCreAm"));