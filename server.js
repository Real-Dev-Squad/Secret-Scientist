const express = require('express');

const app = express();



app.use(express.static('praticeworker'));

app.listen(8080 , function () {
    console.log('server is running on port 8080')
  
});