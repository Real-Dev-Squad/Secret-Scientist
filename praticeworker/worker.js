console.log("hello worker ")

onmessage = function(e) {
    console.log('Worker: Message received from main script');
   let num = e.data;
   let res = [];
   for (let i = 1 ; i <= num ; ++i) {
       res.push(i);
       console.log(i)
   }
   postMessage(res);
    
  }