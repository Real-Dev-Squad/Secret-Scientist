'use strict';

const narsissticNumber = {};                // {'0': 1, '1': 1,...., '10': 153, '11': 370}

function getCharCode(char) {
 return (char.charCodeAt(0) - 'A'.charCodeAt(0));
}

function getCodeChar(charValue) {
 return (String.fromCharCode(('A'.charCodeAt(0) + charValue)));
}

function isNarsissticNumber(num) {
 let sum = 0;
 let tempNum = num;
 let pow = Math.floor((Math.log10(Math.abs(tempNum)) | 0) + 1);

 while (tempNum !== 0) {
  sum += Math.pow(tempNum % 10, pow);
  tempNum = Math.floor(tempNum / 10);
 }
 if (num === sum) {
  return true;
 }

 return false;
}

function getMaxTokens(str) {
 const maxToken = 26;
 let result = '';
 let i = 0, j = 1;

 while (j < str.length || i < str.length) {
  if (Number(str[i] + str[j]) < maxToken && Number(str[i] + str[j]) > 9) {
   result += getCodeChar(Number(str[i] + str[j]));
   i += 2;
   j += 2;
  }
  else {
   result += getCodeChar(Number(str[i]));
   i = j;
   j += 1;
  }
 }

 return result;
}

function calcNarsissticNumber(lim) { // Armstrong Numbers 
 if (!narsissticNumber[lim]) {
  let num = narsissticNumber[Object.keys(narsissticNumber).length - 1] + 1 | 0;
  let i = ((Object.keys(narsissticNumber).length) | 0) - 1;

  while (i < lim) {

   if (isNarsissticNumber(num)) {
    i++;
    narsissticNumber[i] = num;
   }
   num = num + 1;
  }
 }

 return narsissticNumber[lim];
}


function encryption(str, key = 0) {
 let val = 0;
 let encodeStr = '';

 for (let char of str) {
  val = getCharCode(char) + key;
  encodeStr += (calcNarsissticNumber(val));
 }

 let encStr = getMaxTokens(encodeStr);

 return (encStr);

}


function getCrypt(action, str, key) {
 if (action === 'encrypt') {
  return encryption(str, key);
 }
 else if (action === 'decrypt') {
  return "Will be implemented later";
 }
}


onmessage = function (e) {
 let workerResult = {
  result: (getCrypt(e.data.action, e.data.text, e.data.key))
 };
 postMessage(workerResult);
}

// const encryptStr = encryption('ABC', 0);
// console.log(encryptStr);
// const decryptStr = decryption(encryptStr, 0);
// console.log(decryptStr);



