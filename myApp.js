let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html'

console.log('Hello World');

app.get('/json', (req, res) => {
  res.json({"message": "Hello json"});
  });

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
  });




































 module.exports = app;
