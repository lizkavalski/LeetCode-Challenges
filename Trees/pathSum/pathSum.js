'use strict';
var hasPathSum = function(root, sum) {
  if(root === null){
    return false;
  }
  let isIt = false;
  _walk = function(node, counter = 0){
    counter += node.val;
    if(node.left){walk(node.left, counter)};
    if(node.right){walk(node.right, counter)};
    if(!node.left && !node.right){
      if(sum === counter){
        isIt = true;
      }
    }
  }
  walk(root);
  console.log( 'what it is', walk(root));
  return isIt;
};