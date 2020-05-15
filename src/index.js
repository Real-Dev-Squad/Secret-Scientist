'use strict'

const secretScientist = (function () {

  let hasWorkerStarted = false;
  let myWorker = undefined;
  const buttons = document.querySelectorAll('div#crypt > button.button');

  function start(action) {
    const textData = (document.querySelector('#textData').value).split('.');
    let text = textData[0].toUpperCase();
    let key = Number(textData[1]) | 0;

    parallel(action, text, key);

  }

  function parallel(action, text, key) {

    blockElements();

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

      unBlockElements();
    }

  }

  function blockElements() {
    document.getElementById('loading-icon').style.display = 'block';
    let buttons = document.querySelectorAll('button');
    for (let b of buttons) {
      b.classList.add('grayColor');
      b.setAttribute('disabled', true);
    }
    document.getElementById('textData').disabled = true;
  }

  function unBlockElements() {
    document.getElementById('loading-icon').style.display = 'none';
    let buttons = document.querySelectorAll('#crypt button');
    for (let b of buttons) {
      b.classList.remove('grayColor');
      b.removeAttribute('disabled');
    }
    document.getElementById('textData').disabled = false;
  }

  const addCryptEventToButton = function () {
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        if (button.hasAttribute('data-name'))
          start(button.getAttribute('data-name'));
      });
    });
  }

  return {
    init: function () {
      addCryptEventToButton();
    }
  }
})();

secretScientist.init();



