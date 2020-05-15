'use strict';
importScripts('./narsissticNumber.js');
importScripts('./charOperation.js');
importScripts('./lruCache.js')

const ensDecAlgo = (function () {

 const encryption = function (str, key = 0) {
  let val = 0;
  let encodeStr = '';
  const nn = new NasissticNumber();
  const charOps = new CharOperation();
  for (let char of str) {
   val = charOps.getCharCode(char) + key;
   encodeStr += (nn.calcNarsissticNumber(val));
  }

  const encStr = charOps.getMaxTokens(encodeStr);

  return (encStr);

 }


 const crypt = function (action, str, key) {
  if (action === 'encrypt') {
   return encryption(str, key);
  }
  else if (action === 'decrypt') {
   return "Will be implemented later";
  }
 }

 return {
  getCrypt: crypt
 };
})();


onmessage = function (e) {
 let workerResult = {
  result: (ensDecAlgo.getCrypt(e.data.action, e.data.text, e.data.key))
 };
 postMessage(workerResult);
}
