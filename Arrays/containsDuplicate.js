'use strict';
var containsDuplicate = function(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++){
    if(map[nums[i]]){
      return true;
    }
    map[nums[i]] = true;
  }
  return false;
};