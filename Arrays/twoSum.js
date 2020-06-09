'use strict';
var twoSum = function(nums, target) {
  let map = {};
  for(let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = map[target - num];
    if (complement !== undefined) {
      return [i, complement];
    }
    map[num] = i;
  }
};