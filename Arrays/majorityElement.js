'use strict';
var majorityElement = function(nums) {
  if (!nums) return null;
  // setting a counter to count how many times the element appears
  let count = 1;
  let mElement = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (mElement !== nums[i] && count === 0) {
      ++count;
      mElement = nums[i];
    } else if (mElement !== nums[i] && count !== 0) {
      --count;
    } else {
      ++count;
    }
  }
  return mElement;
};