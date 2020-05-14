'use strict';
importScripts('./narsissticNumber.js');
importScripts('./charOperation.js');

const ensDecAlgo = (function () {

 let encryption = function (str, key = 0) {
  let val = 0;
  let encodeStr = '';
  let nn = new NasissticNumber();
  let charOps = new CharOperation();
  for (let char of str) {
   val = charOps.getCharCode(char) + key;
   encodeStr += (nn.calcNarsissticNumber(val));
  }

  let encStr = charOps.getMaxTokens(encodeStr);

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

 return {
  init: onmessage = function (e) {
   let workerResult = {
    result: (getCrypt(e.data.action, e.data.text, e.data.key))
   };
   postMessage(workerResult);
  }
 };
})();

ensDecAlgo.init();


