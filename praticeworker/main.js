console.log("from main fil")

// register a service worker 
let userInput = 10;

if (window.Worker){
    console.log('worker')
    const myWorker = new Worker("worker.js");

    myWorker.postMessage(userInput)
    myWorker.onmessage =function callback(e) {
        console.log(e.data);
    }
}



