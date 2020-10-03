'use strict';
var preorder = function(root) {
  // checking if their a root
  if (!root) {
    return [];
  }
  //     setting up empty arrays is push node values in, starting with root being in the stack.
  let order = [];
  let stack = [];
  stack.push(root);

  //     while the stack is not empty
  while(stack.length) {
    //     pop the node from stack and push to the order.
    let node = stack.pop();
    order.push(node.val);
    // assign the childern as node.childer
    let children = node.children;
    // in the for loop i is the length of the array, and it going down. in the loop it push the childern at the index of 'i' to the stack
    for (let i = node.children.length - 1;i >= 0; i--) {
      stack.push(node.children[i]);
    }
  }
  // return the order
  return order;
};
// const stack = [];
//  const result = [];
//  if (!root) {
//      return result;
//  }
//  stack.push(root);
//  while(stack.length) {
//      const node = stack.pop();
//      result.push(node.val);
//      for(let i = node.children.length - 1; i >= 0; i--) {
//          stack.push(node.children[i]);
//      }
//  }
//  return result;