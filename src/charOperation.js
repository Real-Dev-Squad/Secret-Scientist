'use strict';
class CharOperation {
 constructor() {
  const instance = this.constructor.instance;
  if (instance) {
   return instance;
  }
  this.constructor.instance = this;
 }

 getCharCode(char) {    // Returns 0 -> 'A', 1 -> 'B' ...
  return (char.charCodeAt(0) - 'A'.charCodeAt(0));
 }

 getCodeChar(charValue) {    //Returns  'A' -> 0, 'B' ->1 ...
  return (String.fromCharCode(('A'.charCodeAt(0) + charValue)));
 }

 getMaxTokens(str) {
  const maxToken = 26;
  let result = '';
  let i = 0, j = 1;

  while (j < str.length || i < str.length) {
   if (Number(str[i] + str[j]) < maxToken && Number(str[i] + str[j]) > 9) {
    result += this.getCodeChar(Number(str[i] + str[j]));
    i += 2;
    j += 2;
   }
   else {
    result += this.getCodeChar(Number(str[i]));
    i = j;
    j += 1;
   }
  }

  return result;
 }

}



