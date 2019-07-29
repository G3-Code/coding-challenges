function sumStrings(a, b) {
  a === "" ? (a = "0") : (a = a);
  b === "" ? (b = "0") : (b = b);
  let num1 = a.split("");
  let num2 = b.split("");
  // get the length of the largest array
  let arrLen = 0;
  let num3, num4;
  num1.reverse();
  num2.reverse();
  if (num1.length > num2.length) {
    arrLen = num1.length;
    num3 = new Array(arrLen).fill("0");
    for (let j = 0; j < num2.length; j++) {
      num3[j] = num2[j];
    }
    num4 = num1;
  } else if (num1 === num2) {
    arrLen = num1.length;
  } else {
    arrLen = num2.length;
    num3 = new Array(arrLen).fill("0");
    for (let j = 0; j < num1.length; j++) {
      num3[j] = num1[j];
    }
    num4 = num2;
  }

  // Adding two arrays
  let temp = 0;
  let sum = 0;

  let output = new Array(arrLen).fill("");
  for (let k = 0; k < arrLen; k++) {
    if (k !== arrLen - 1) {
      sum = parseInt(num3[k]) + parseInt(num4[k]);
      output[k] = (sum % 10) + temp;
      if (output[k] === 10) {
        output[k] = 0;
        temp = 1;
      } else {
        temp = Math.floor(sum / 10);
      }
    } else if (k === arrLen - 1) {
      sum = parseInt(num3[k]) + parseInt(num4[k]);
      output[k] = sum + temp;
    }
    console.log(num3[k], num4[k], sum, temp, output[k]);
  }
  output.reverse();
  for (let k = 0; k < output.length; k++) {
    if (output[k] === 0 || output[k] === "0") {
      output.shift();
    } else {
      break;
    }
  }

  return output.toString().replace(/,/g, "");
}

// console.log(sumStrings("123", "456"));
// console.log(sumStrings("00103", "08567")); //- Expected: '8670', instead got: '08670'
console.log(
  sumStrings("712569312664357328695151392", "8100824045303269669937")
); //Expected: '712577413488402631964821329'
              

// 7125693126643 5 7 3 2 8695151392
//      81008240 4 5 3 0 3269669937
// 7125774134884 0 2 6 3 1964821329
