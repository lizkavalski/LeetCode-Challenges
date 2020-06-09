'use strict';
var removeDuplicates = function(nums) {
  if(nums.length === 0){
    return 0;
  }
  var i = 0;
  for(var j = 0; j < nums.length;j++){
    if (nums[j] !== nums[i]){
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};