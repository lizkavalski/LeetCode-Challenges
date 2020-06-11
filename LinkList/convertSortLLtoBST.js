'use strict';
var sortedListToBST = function(head) {
  // convert linked list to arrary
  const vals = [];
  while (head) {
    vals.push(head.val);
    head = head.next;
  }

// construct tree using arr
  function makeATree(arr) {
    if (arr.length === 0) {
      return null;
    }
    if (arr.length === 1) {
      return new TreeNode(arr[0]);
    }
    const mid = Math.floor(arr.length / 2);
    const root = new TreeNode(arr[mid]);

// recursively construct left or right side nodes
    root.left = makeATree(arr.slice(0, mid));
    root.right = makeATree(arr.slice(mid + 1));
    return root;
  }
  return makeATree(vals);
};