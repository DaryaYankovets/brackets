module.exports = function check(str, bracketsConfig) {
  let arr = [];
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
  if (sameBrakets.length === 0) {
    arr = [...str];
  } else {
    for (let i = 0; i < sameBrakets.length; i++) {
        [...str].forEach(e => {
          if(e !== sameBrakets[i]) arr.push(e);
        });
    }
  }
  
  arr.forEach((elem, index) => {
    if (openBrakets.findIndex(e => e === elem) !== -1) {
      stack.push(elem);
    } else {
        const indexCloseBrakets = closeBrakets.findIndex(e => e === elem);
        const openBraket = openBrakets[indexCloseBrakets];
      
        if(stack[stack.length - 1] === openBraket) {
          stack.pop();
       }
    }
  });
  
   return stack.length === 0;
}
