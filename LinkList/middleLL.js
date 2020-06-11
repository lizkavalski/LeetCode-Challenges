'use strict';
var middleNode = function(head) {
  if (head === null){
    return head;
  }
  let counterLength = function(node){
    let counter = 0;
    while(node.next){
      counter++;
      node = node.next;
    }
    return counter;
  };
  let nodeThatIsInTheMiddle = function(node,middle){
    let current = this.head;
    for(let i = 0; i < middle; i++){
      node = node.next;
    }
    return node;
  };
  let middle = Math.ceil(counterLength(head)/2);
  return nodeThatIsInTheMiddle( head, middle);
};