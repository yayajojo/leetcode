/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function (strs) {
    if (strs.length === 0){
        return '';
    }
    let shortest = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortest.length) {
            shortest = strs[i];
        }
    }
    let index = 0;
    let prefix = '';
    while(index < shortest.length){
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][index] !== shortest[index]) {
                return prefix;
            }
        }
        prefix += shortest[index];
        index++;
    }
    return prefix;
};

//let longestCommonPrefix = function(strs){

//}

// console.log(longestCommonPrefix(["flower", "flow", "flight"]))// "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"]))// ""
/**Explanation:
 * There is no common prefix among the input strings.
*/
// Divide and Conquer

let longestCommonPrefix2 = function (strs) {
let prefix = '';
function isEmptyStr(item){return item === ''} ;
let emptyStrIndex = strs.findIndex(isEmptyStr);
if(emptyStrIndex !== -1){
    return prefix;
}
if(strs.length === 0){
    return prefix;
}else if(strs.length === 1){
    return strs[0];
}else if(strs.length === 2){
  for(let i = 0; i < strs[0].length; i++){
   if(strs[0][i] === strs[1][i]&& strs[1].length >= i+1){
       prefix = prefix.concat(strs[0][i]);
   }else{
       return prefix;
    }
  }
  return prefix;
}
let firstStr = strs[0];
let remainedStrs = strs.slice(1);
prefix = longestCommonPrefix2([firstStr,longestCommonPrefix2(remainedStrs)]);
return prefix;
}

console.log(longestCommonPrefix2(["", "", ""]))//''
console.log(longestCommonPrefix2(["c", "c"]));//c
console.log(longestCommonPrefix2(["flower", "flow", "flight"]))// "fl"
console.log(longestCommonPrefix2(["dog", "racecar", "car"]))// ""
// Binary search tree
let longestCommonPrefix3 = function (strs) {

}