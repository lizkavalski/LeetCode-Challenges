'use strict';
var rangeSumBST = function(root, L, R) {
  //    set a counter to count/add the sum of the left and right node
  let sum = 0;
  //     if the root  is equal to null it returns the sum, for example if the sum is 3 and the root is null it returns 3.
  if (root === null) {
    return sum;
  }
  //    check to see if the left is greater then the root, if it is then it add the value to sum, which calls the function again, but insted of just the root it root of the left.
  if (root.val > L) {
    sum += rangeSumBST(root.left, L, R);
  }
  // if the root value is greater/equal to the left and less then/equle to the of the rigth the root value is add to the sum.
  if (root.val <= R && root.val >= L) {
    sum += root.val;
  }
  // if root.val is less then the right it add to the sum and calls the funtion again from the root of the right.
  if (root.val < R) {
    sum += rangeSumBST(root.right, L, R);
  }

  //returns the sum value
  return sum;
};