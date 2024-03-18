require('dotenv').config()

let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html'

console.log('Hello World');

app.get('/:word/echo', (req, res) => {
  // Extract the word from req.params
  const { word } = req.params;
  
  // Respond with a JSON object containing the echoed word
  res.json({ echo: word });
});

/*

// Middleware function to add current time to req.time
const addTimeMiddleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

// Route definition with chained middleware and final handler
app.get('/now', addTimeMiddleware, (req, res) => {
  res.json({ time: req.time });
});
*/

/*
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
*/

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





































 module.exports = app;
