var isValid = function(s) {
    let stack = [];
    const bracketsArray = {
      '{':'}',
      '[':']',
      '(':')'
    }
    
    for (i=0; i < s.length; i++) {
        if (s[i] == '{' || s[i] == '(' || s[i] == '[') {
            stack.push(s[i]);
        } else if (s[i] == '}' || s[i] == ']' || s[i] == ')') {
            if (bracketsArray[stack[stack.length-1]] == s[i]) {
              stack.pop()
            }
        }  
    }

   if (stack.length == 0) {
     return 'sequência válida';
   } else {
     return 'sequência inválida';
   }
};

console.log(isValid("{ [ ( ) ( ) { } [ ] ] { } }"))