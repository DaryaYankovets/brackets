module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }
  
  let stack = [];
  let openBrakets = [];  // ["(","["]
  let closeBrakets = [];  //  [")","]"]
  let sameBrakets = [];
  
  bracketsConfig.forEach(elem => elem.forEach((elem, index) => {
    index % 2 === 0 ? openBrakets.push(elem) : closeBrakets.push(elem);
  }));  
  
  for (let i = 0; i < openBrakets.length; i++){
    if (openBrakets[i] === closeBrakets[i]) {
      sameBrakets.push(openBrakets[i]);
    }
  }
 
  [...str].forEach((elem, index) => {
    if(sameBrakets.findIndex(i => i === elem) === -1) {
      if (openBrakets.findIndex(e => e === elem) !== -1) {
        stack.push(elem);
      } else {
          const indexCloseBrakets = closeBrakets.findIndex(el => el === elem);
          const openBraket = openBrakets[indexCloseBrakets];

          if(stack[stack.length - 1] === openBraket) {
            stack.pop();
         }
      }
    } else {
      if (stack.findIndex(ind => ind === elem) === -1) {
        stack.push(elem);
      } else {
          const indexCloseBrakets = closeBrakets.findIndex(el => el === elem);
          const openBraket = openBrakets[indexCloseBrakets];

          if(stack[stack.length - 1] === openBraket) {
            stack.pop();
         }
      }
    }
    
  });
  
   return stack.length === 0;
}
