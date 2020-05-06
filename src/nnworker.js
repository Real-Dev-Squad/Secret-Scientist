const Generator = require('./nngenerator');
console.log('worker started ');
onmessage =  function calculation(e) {
    console.log('calculation will start soon')
    let limit = e.data;
    let ans = Generator.nnGenerator(limit);
    console.log(ans , 'ans from worker')
    postMessage(ans);

}