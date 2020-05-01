/**
 * @param {number} x
 * @return {boolean}
 */
// First solution: NUM

// let isPalindrome = function (x) {
//     let reverseInt = function (y) {
//         let reversed = 0;
//         while (y >= 1) {
//             let remainder = y % 10;
//             reversed = reversed * 10 + remainder;
//             y = Math.floor(y / 10);
//         }
//         return reversed;
//     }
//     if(x<0){
//         return false;
//     }
//     if (reverseInt(x) == x) {
//         return true;
//     } else {
//         return false;
//     }
// };


// console.log(isPalindrome(-121));//false
// console.log(isPalindrome(10));//false
// console.log(isPalindrome(121));//true
//Second solution: NUM to STR


// split the number into half


let isPalindrome = function (x) {
    if(x<0){
        return false;
    }
    if(x<10){
        return true;
    }
    let lenX = Math.floor(Math.log10(x))+1;
    let firDigits;//12321 (12)
    let lastDigits;//12321 (21)
    if(lenX%2 === 1){
        firDigits = Math.ceil(lenX/2);
        lastDigits = Math.floor(lenX/2);
    }else{
        firDigits = lenX/2;
        lastDigits = lenX/2;
    }
    let firstPart = Math.floor(x/(10**firDigits));
    let lastPart = 0; 
    for(let i = 0; i < lastDigits; i++){
        lastPart = lastPart*10 + (x % 10);
        x = Math.floor(x/10); 
    }
    if(lastPart === firstPart){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome(-121));//false
console.log(isPalindrome(1001));//true
console.log(isPalindrome(121));//true
console.log(isPalindrome(0));//false