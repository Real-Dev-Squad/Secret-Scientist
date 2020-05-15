'use strict';

class NasissticNumber {
 constructor() {
  const instance = this.constructor.instance;
  if (instance) {
   return instance;
  }
  this.constructor.instance = this;
  this.lru = new LRUCatch(10);            // Reference from ./src/lruCache.js
 }

 isNarsissticNumber(num) {
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


 calcNarsissticNumber(lim) {               // Armstrong Numbers
  if (this.lru.get(lim) === false) {
   let num = 0;
   let i = -1;

   while (i < lim) {
    if (this.isNarsissticNumber(num)) {
     i++;
    }
    num = num + 1;
   }
   this.lru.put(i, num - 1)
  }

  return this.lru.get(lim);
 }

}

