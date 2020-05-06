const encrypt = require('./encryption');

let input = document.querySelector(".string");
let key = document.querySelector(".key");
let p = document.querySelector("p");
let output = document.querySelector('.output');
let button = document.querySelector('._button_container');
p.style.display = "none";


input.addEventListener('input',myfunc);
key.addEventListener('change',mykey);
button.addEventListener('click',myClick);
let stringValue = "";
let showAns = false;
let errorFlag = false;
let timeout = null;
let keyValue = "";

let errorMessages = {
  ENC: "string already encrypted",
  VALID: "string is not valid as it contains number and special characters",
  KEY: "your key should be less than 50",
  EMPTY: "string and key input cannot be empty"
};
function showOutput(answer) {
  output.innerText = answer;
}
function mykey(event) {
  keyValue = Number(event.target.value);
}
function myfunc(event) {
  // if (timeout) {
  //   clearTimeout(timeout)
  //   p.style.display = 'none'
  // }
  let x = event.target.value.toUpperCase();
  input.value = x;
  stringValue = x;
  // caps defined
  // check  only alphabets
}

// button click is encrpyt run this function
function encryptCheck() {
  console.log(" hi i am from enc check");
  let errorMsg = "";
  let encryptCheck = new RegExp(/^[A-Z]+$/);
  // string is valid
  // if string contains . then error

  if (!(stringValue && keyValue)) {
    showAns = false;
    errorMsg += errorMessages.EMPTY;
  }

  if (keyValue > 50) {
    showAns = false;
    errorMsg += errorMessages.KEY;
  }
  if (stringValue.includes(".")) {
    showAns = false;
    errorMsg += errorMessages.ENC;
  }
  if (!encryptCheck.test(stringValue)) {
    showAns = false;
    errorMsg += errorMessages.VALID;
  }

  if (!errorMsg) {
    showAns = true;
  }

  if (!showAns) {
    // show that modal
    // start timeout
    // if user start typing in input clear timeout and disappear that modal
    p.style.display = "block";
    p.innerText = errorMsg;
    errorFlag = true;
    timeout = setTimeout(function flagSet() {
      console.log("hi i am executed");
      errorFlag = false;
      p.style.display = "none";
    }, 5000);
  }
  else {
    
    try {
      showOutput('wait for answer')
     encrypt.encryption(stringValue,keyValue,showOutput);

     
    // console.log('promise' , promise)
    //  promise.then((ans)=>{
    //    console.log('hi i will be resolved')
    //    output.innerText = ans;
    //  });
    }
    catch(e){
     
    }
     // otherwise show spinner 
     
  }

 
}

function myClick(event) {
 
  let m = event.target.classList;

  let decryptCheck = "";

  if (m.toString().includes("encrypt")) {
    encryptCheck();
  }
}
// debouncing
