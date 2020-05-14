class NasissticNumber {
 constructor() {
  const instance = this.constructor.instance;
  if (instance) {
   return instance;
  }
  this.constructor.instance = this;
  this.narsissticNumber = {};                // {'0': 1, '1': 1,...., '10': 153, '11': 370}
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
  if (!this.narsissticNumber[lim]) {
   let num = this.narsissticNumber[Object.keys(this.narsissticNumber).length - 1] + 1 | 0;
   let i = ((Object.keys(this.narsissticNumber).length) | 0) - 1;

   while (i < lim) {

    if (this.isNarsissticNumber(num)) {
     i++;
     this.narsissticNumber[i] = num;
    }
    num = num + 1;
   }
  }

  return this.narsissticNumber[lim];
 }

}

