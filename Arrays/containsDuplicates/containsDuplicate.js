'use strict';
var containsDuplicate = function(nums) {
  let map = [];
  for (let i = 0; i < nums.length; i++){
    if(map[nums[i]]){
      return true;
    }
    map[nums[i]] = true;
  }
  return false;
};

// var containsDuplicate2 = function(nums) {
//   let arr = [];
//   for (var i=0; i <nums.length; i++) {
//     if(!arr.includes(nums[i])){
//       arr.push(nums[i]
//     }
//   }
//   if(arr.length === nums.length)
//     return false;
//   return true;
// };