'use strict';
var searchBST = function(root, val) {
  // check if the root is null or has the value that it trying to find
  if (root === null || root.val === val) {
    return root;
  }
  // check if the value is less then the root value if it is then it gose to the left. In which the the function is called again with the root being left of the orginaly root.
  if (val < root.val){
    return searchBST(root.left, val);
  }
  // check if the value is more then the root value if it is then it gose to the right. In which the the function is called again with the root being right of the orginaly root.
  if (val > root.val){
    return searchBST(root.right, val);
  }
};