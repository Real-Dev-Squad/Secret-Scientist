
let nnMap = [];

function encryption(string, key , callback) {
    let stringKey = '';
    let largestNN = Number.MIN_SAFE_INTEGER;
    for (let char in string) {
        let phase1= string.charCodeAt(char)%65 + key;
        stringKey += phase1;
        if (phase1 > largestNN){
            largestNN = phase1;
        }
    }
    // wait for the NN-Num to be generated 
    let preFinalString ='';
    if(window.Worker) {
        const  myWorker = new Worker("worker.js");
        console.log('limit for NN'+ largestNN);
        myWorker.postMessage(largestNN);
        myWorker.onmessage = function callback(e) {
          nnMap = e.data; 
        let nnString = '';
        
    for (let i = 0 ;  i < string.length ; ++i ) {
        nnString += nnMap[Number((string.charCodeAt(i)%65)+ key)];
        
    }
    console.log(nnString , "nnstring")
  
    for (let i = nnString.length-1 ; i >= 0 ; ) {
        let currentNum = 0;
        if  (i-1 <0) currentNum = nnString[i] ;
        else currentNum = nnString[i-1]+nnString[i];
        if (currentNum > 25) {
            preFinalString = preFinalString+String.fromCharCode(Number(nnString[i])+65);
            i--;
        }
        else {
            preFinalString = preFinalString + String.fromCharCode(Number(currentNum)+65);
            i -= 2;
        }
        }
        console.log(preFinalString , "prefinalstring")
        callback(preFinalString);
   
    }
   
    }
    
    
    

}

module.exports = {
    encryption
}