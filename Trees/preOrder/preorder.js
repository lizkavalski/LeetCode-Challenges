'use strict';
var preorder = function(root) {
  let results = [];
  if(!root){
    return results
  }
  function traverse(node){
      results.push(node.val)
      for(let i =0;i<node.children.length;i++){
          traverse(node.children[i])
      }   
  }
  traverse(root)
  return results
}