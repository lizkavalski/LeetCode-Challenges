'use strict';
var maxDepth = function(root) {
  if (root === null) {
    return 0;
  }
  let leftside = maxDepth(root.left);
  let rightside = maxDepth(root.right);
  return Math.max(leftside, rightside) + 1;
};