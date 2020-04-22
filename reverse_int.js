// 7. Reverse Integer
// Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:
// Input: 123
// Output:  321
// Example 2:
// Input: -123
// Output: -321
// Example 3:
// Input: 120
// Output: 21


function reverseInt(x){
    if (x > (Math.pow(2,31)-1) || x < (Math.pow(2,31)*-1)) {
        return 0; 
   }     
let sign = x < 0? -1 : 1;
let posTarget = Math.abs(x);
let reversedVal = 0;
while(Math.floor(posTarget)){
    let remainder = posTarget % 10;
    reversedVal = reversedVal*10 + remainder;
    posTarget = Math.floor(posTarget/10);
}
let result = reversedVal*sign;
if(result> (Math.pow(2,31)-1) || result < (Math.pow(2,31)*-1)){
    return 0;
}
return result;
}

function reverseInt2(x){
 function checkLength(x){
    if (x > (Math.pow(2,31)-1) || x < (Math.pow(2,31)*-1)) {
        return 0; 
   }
 }  
checkLength(x);
let sign = x < 0? -1 : 1;
let posTarget = Math.abs(x);
let reversedVal = 0;
while(Math.floor(posTarget)){
let remainder = posTarget % 10;
reversedVal = reversedVal*10 + remainder;
posTarget = Math.floor(posTarget/10);
}
let result = reversedVal*sign;
checkLength(result);
return result;
}


function reverseInt3(x){
let rev = 0;
while (x != 0) {
    let pop = x % 10;
    x = x>0?Math.floor(x/10):Math.ceil(x/10);
    if (rev > Math.floor((Math.pow(2,31)-1)/10) || 
    (rev === Math.floor((Math.pow(2,31)-1)/10)&& pop > 7)){
        return 0;
    };
    if (rev < Math.ceil((Math.pow(2,31)*-1)/10) ||
     (rev === Math.ceil((Math.pow(2,31)*-1)/10) && pop < -8)) {
         return 0;
        };        
    rev = rev * 10 + pop;
}
return rev;
}


console.log(reverseInt3(-1563847412));


let result3 = reverseInt(1534236469);
console.log(result3);

