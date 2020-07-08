'use strict';
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// with a hashmap
// var twoSum = function(nums,target){
//   const indices = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (indices.has(complement)) {
//       return [indices.get(complement), i];
//     }
//     indices.set(nums[i], i);
//   }
// }