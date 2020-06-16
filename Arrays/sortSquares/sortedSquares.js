'use strict';
var sortedSquares = function(A) {
  let result = [];
  for (let i = 0; i < A.length; i++) {
    result.push(A[i] * A[i]);
  }
  return result.sort((a,b)=>a - b);
};