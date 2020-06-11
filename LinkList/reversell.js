'use strict';
var reverseList = function(head) {
  if(head === null){
    return head;
  };
  let current = head;
  let tail = null;

  while( current !== null ){
    let perv = current.next;
    current.next = tail;
    tail = current;
    current = perv;
  }
  return tail;
};