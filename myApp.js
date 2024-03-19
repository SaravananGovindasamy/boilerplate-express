require('dotenv').config()

let bodyParser = require('body-parser');
let express = require('express');
let app = express();

absolutePath = __dirname + '/views/index.html'

console.log('Hello World');

app.use(bodyParser.urlencoded({ extended: false }));

// Define the route handler for GET /name
// This handler retrieves first and last name from query parameters
const getNameHandler = (req, res) => {
    const { first, last } = req.query;
    const fullName = `${first} ${last}`;
    res.json({ name: fullName });
  };
  
  // Define the route handler for POST /name
  // This handler expects first and last name in the request body
  const postNameHandler = (req, res) => {
    const { first, last } = req.body;
    const fullName = `${first} ${last}`;
    res.json({ name: fullName });
  };
  
  // Mount the route handlers for GET and POST requests to /name
  app.route('/name')
    .get(getNameHandler)
    .post(postNameHandler);

/*
app.get('/:word/echo', (req, res) => {
  // Extract the word from req.params
  const { word } = req.params;
  
  // Respond with a JSON object containing the echoed word
  res.json({ echo: word });
});
*/


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






































 module.exports = app;
