const { NasissticNumber } = require('./nnTestAlgo.js');

const nnNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208,
  9474, 54748, 92727, 93084, 548834];            //Nasisstic Number from 0 to 20;

const nn = new NasissticNumber();


nnNumber.forEach((num, index) => {
  if (num === nn.calcNarsissticNumber(index))
    console.log(`NN Number ${index}: (${num} == ${nn.calcNarsissticNumber(index)})   ->   TEST PASS`);
  else
    console.log(`NN Number ${index}: (${num} == ${nn.calcNarsissticNumber(index)})  ->   TEST FAIL`);

});
