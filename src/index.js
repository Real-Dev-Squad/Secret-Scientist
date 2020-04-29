let hasWorkerStarted = false;
function start(action) {
 const textData = (document.querySelector('#textData').value).split('.');
 let text = textData[0].toUpperCase();
 let key = Number(textData[1]) | 0;
 parallel(action, text, key);
}

function parallel(action, text, key) {

 bolckElements();

 if (window.Worker && !hasWorkerStarted) {
  myWorker = new Worker('./src/encDecAlgo.js');
  hasWorkerStarted = true;
 }

 const argsData = {
  action: action,
  text: text,
  key: key
 };

 myWorker.postMessage(argsData);

 myWorker.onmessage = function (e) {
  let result = e.data.result;

  document.querySelector('#inpStr').innerText = text;
  document.querySelector('#outStr').innerText = result;

  unBolckElements();
 }

}

function bolckElements() {
 document.getElementById('loading-icon').style.display = 'block';
 let buttons = document.querySelectorAll('button');
 for (b of buttons) {
  b.classList.add('grayColor');
  b.setAttribute('disabled', true);
 }
 document.getElementById('textData').disabled = true;
}

function unBolckElements() {
 document.getElementById('loading-icon').style.display = 'none';
 let buttons = document.querySelectorAll('button');
 for (b of buttons) {
  b.classList.remove('grayColor');
  b.removeAttribute('disabled');
 }
 document.getElementById('textData').disabled = false;
}

