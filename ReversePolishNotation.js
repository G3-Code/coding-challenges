function calc(expr) {
  let stack = expr.split(" ");
  console.log(stack);
  if (expr === "") {
    return 0;
  } else if (stack.length <= 1) {
    // less than or equal to 1
    if (stack.length === 0) {
      return 0;
    } else {
      return parseFloat(stack[0]);
    }
  } else {
    let count = 0;
    while (stack.length > 1) {
      console.log(stack);
      stack = reduceStack(stack);
      count++;
    }
  }
  return parseFloat(stack[0]);
}

function getSum(a, b) {
  return a + b;
}

function getDiff(a, b) {
  return a - b;
}

function getMul(a, b) {
  return a * b;
}

function getDiv(a, b) {
  return a / b;
}

function reduceStack(newStack) {
  let operators = ["+", "-", "*", "/"];
  for (let i = 0; i < newStack.length; i++) {
    if (operators.includes(newStack[i])) {
      switch (newStack[i]) {
        case "+": {
          let value = getSum(
            parseFloat(newStack[i - 2]),
            parseFloat(newStack[i - 1])
          );
          newStack[i] = value.toString();
          newStack.splice(i - 1, 1);
          newStack.splice(i - 2, 1);
          return newStack;
        }
        case "-": {
          let value = getDiff(
            parseFloat(newStack[i - 2]),
            parseFloat(newStack[i - 1])
          );
          newStack[i] = value.toString();
          newStack.splice(i - 1, 1);
          newStack.splice(i - 2, 1);
          return newStack;
        }
        case "*": {
          let value = getMul(
            parseFloat(newStack[i - 2]),
            parseFloat(newStack[i - 1])
          );
          newStack[i] = value.toString();
          //   newStack.shift();
          //   newStack.shift();
          newStack.splice(i - 1, 1);
          newStack.splice(i - 2, 1);
          return newStack;
        }
        case "/": {
          let value = getDiv(
            parseFloat(newStack[i - 2]),
            parseFloat(newStack[i - 1])
          );
          newStack[i] = value.toString();
          newStack.splice(i - 1, 1);
          newStack.splice(i - 2, 1);
          return newStack;
        }
      }
    }
  }
}
// console.log(calc(""));
// console.log(calc("3"));
// console.log(calc("3.5"));
// console.log(calc("1 3 +"));
// console.log(calc("1 3 *"));
// console.log(calc("1 3 -"));
// console.log(calc("4 2 /"));
//console.log(calc("15 7 1 1 + − / 3 * 2 1 1 + + −"));
console.log(calc("15 7 1 1 + - / 3 * 2 1 1 + + -"));
