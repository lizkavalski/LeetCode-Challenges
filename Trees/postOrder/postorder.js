'use strict';
var postorder = function(root) {
  // checking if their a root
  if (!root) {
    return [];
  }
  //     setting up empty arrays is push node values in, starting with root being in the stack.
  let order = [];
  let stack = [];
  stack.push(root);

  //     while the stack is not empty
  while(stack.length > 0) {
  //     pop the node from stack and push to the order.
    let node = stack.pop();
    order.push(node.val);
    // assign the childern as node.childer
    let children = node.children;
    // push the childern at the index od 'i' to the stack
    for (let i = 0; i < node.children.length; i++) {
      stack.push(node.children[i]);
    }
  }
  // return the order in reverse
  return order.reverse();
};