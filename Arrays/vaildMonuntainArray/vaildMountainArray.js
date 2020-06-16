'use strict';
var validMountainArray = function(A) {
  if (A.length <= 2) return false;
  let direction = 1; // 1 for up and 0 for down;
  let previous = A[0];

  for (let i = 1; i < A.length; ++i) {
    let current = A[i];
    if (current > previous) {
      if (direction !== 1) return false;
      previous = current;
      continue;
    } else if (current < previous) {
      if (i === 1) return false;
      direction = 0;
      previous = current;
      continue;
    } else {
      return false;
    }
  }

  return direction === 0 ? true : false;
};