'use strict';
var searchBST = function(root, val) {
  if (root === null || root.val === val) {
    return root;
  }
  if (val < root.val){
    return searchBST(root.left, val);
  }
  if (val > root.val){
    return searchBST(root.right, val);
  }
};