// 1. Two Sum
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// 1. Brute-force attack

class Solution1{
     twoSum(nums,target){
       for (let i = 0; i<nums.length;i++){
          for(let j = i+1; j<nums.length; j++ ){
              if(nums[i]+nums[j]== target){
                  return[i,j]
              }
          }
       }
    }

}
let result1 = (new Solution1).twoSum([2, 7, 11, 15],26);
console.log(result1);

// 2. use hash table to reduce the search time: hash table: O(1)

class Solution2{
    
    twoSum(nums,target){
        let foundArr = {};
        for(let i = 0; i< nums.length; i++ ){
            let matchedVal = target-nums[i];
            if (matchedVal in foundArr){
                return [foundArr[matchedVal],i];
            }else{
                foundArr[nums[i]] = i;
            }
        }  
    }
}

 let result2 = (new Solution2).twoSum([2, 7, 11, 15],26);
 console.log(result2);









   



