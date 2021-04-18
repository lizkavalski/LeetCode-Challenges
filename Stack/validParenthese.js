var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i ++) {
      let p = s[i];
      if (p === '(') {
          stack.push(')')
      } else if (p === '{') {
          stack.push('}')
      } else if (p === '[') {
          stack.push(']')
      } else {
          if (stack.pop() !== p) return false
      }
  }
  
  return stack.length === 0;
};