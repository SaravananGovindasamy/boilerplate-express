require('dotenv').config()

let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html'

console.log('Hello World');

// Logger middleware function
const loggerMiddleware = (req, res, next) => {
  // Extract information from the request object
  const method = req.method;
  const path = req.path;
  const ip = req.ip;

  // Log the request information to the console
  console.log(`${method} ${path} - ${ip}`);

  // Call next() to move to the next middleware or route handler
  next();
};

// Mount the logger middleware to be executed for all requests
app.use(loggerMiddleware);

app.get('/json', (req, res) => {
  res.json({"message": "Hello json"});
});

/*
app.get('/json', (req, res) => {
    let message = "Hello json";
    if (process.env.MESSAGE_STYLE  === 'uppercase') {
      message = message.toUpperCase();
    }
    res.json({"message": message});
  });

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(absolutePath);
  });
*/
