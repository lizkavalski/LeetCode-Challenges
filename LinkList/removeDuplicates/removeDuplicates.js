'use strict';
var deleteDuplicates = function(head) {
  if(head === null || head.next === null){
    return head;
  }
  let arr = [];
  let curr = head;
  let pev = null;
  while(curr){
    if(arr.includes(curr.val)){
      //let temp = curr;
      pev.next = curr.next;
      //curr = pev.next;
    }
    else{
      arr.push(curr.val);
      pev = curr;
    }
    curr = curr.next;
  }
  return head;
};
//  var history = [];
//   var current = head;
//   var previous = null;
//   while(current){
//       if(history.indexOf(current.val) >= 0){
//         previous.next = current.next;
//       }else{
//         history.push(current.val);
//         previous = current;
//       }
//       current = current.next 
//   }

//   return head;
// };