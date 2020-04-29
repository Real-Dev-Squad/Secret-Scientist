nn = {};
function aa(lim) {
 if (!nn[lim]) {
  let num = nn[Object.keys(nn).length - 1] + 1 | 0;
  let sum = 0;
  let i = ((Object.keys(nn).length) | 0) - 1;;
  // let lim = 10;
  let tempNum = 0;
  let pow = 0;
  while (i < lim) {
   sum = 0;
   tempNum = num;
   pow = Math.floor((Math.log10(Math.abs(tempNum)) | 0) + 1);
   while (tempNum !== 0) {
    sum += Math.pow(tempNum % 10, pow);
    tempNum = Math.floor(tempNum / 10);
   }
   if (num === sum) {
    console.log('yes' + sum + ' ' + num);
    i++;
    nn[i] = sum;
   }
   num = num + 1;
  }
 }
}



aa(1);
console.log(nn);
aa(4);
console.log(nn);
aa(10);
console.log(nn);
aa(5)
console.log(nn[10]);




console.log(findValue(nn, 5));
