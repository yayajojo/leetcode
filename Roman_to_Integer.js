// First solution:
/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
    let romanInt = {
    I:1,             
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000}
    let total = 0; 
    for(let i = 0; i < s.length;i++){
        if(romanInt[s[i]]>=romanInt[s[i+1]] || i==(s.length-1)){
            total += romanInt[s[i]];
        }else{
            total -= romanInt[s[i]];
        }
    }
    return total;
};

console.log(romanToInt('LVIII'));//58
console.log(romanToInt('MCMXCIV'));//1994
