let nnMap = {
    '10' : 9,
    '11': 153,
    '12' : 370,
    '13' : 371
}

function encryption(string, key) {
    let stringKey = '';
    for (let char in string) {
        stringKey += string.charCodeAt(char)%65 + key
    }
    let nnString = '';
    for (let i = 0 ;  i < stringKey.length-1 ; i += 2) {
        nnString += nnMap[stringKey[i]+stringKey[i+1]];
    }
    let preFinalString =''
    for (let i = nnString.length-1 ; i >= 0 ; ) {
        let currentNum = nnString[i-1]+nnString[i];
        if (currentNum > 25) {
            preFinalString = preFinalString+String.fromCharCode(Number(nnString[i])+65);
            i--;
        }
        else {
            preFinalString = preFinalString + String.fromCharCode(Number(currentNum)+65);
            i -= 2;
        }
    }
    return preFinalString;
    

}
module.exports = {
    encryption
}