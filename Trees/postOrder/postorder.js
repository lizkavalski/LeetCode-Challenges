'use strict';
var postorder = function(root) {
  if(!root){
    return [];
}
let order= [];
const traverse = (node) => {
if (node.children)
  node.children.forEach((child) => {
    traverse(child);
  });
order.push(node.val);
};

traverse(root);
return order;
};