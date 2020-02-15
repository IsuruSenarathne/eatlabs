var express = require('express');
const bodyParser = require('body-parser');

var userRouter = express.Router();

userRouter.use(bodyParser.json())

userRouter.route("/")

.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})

.get((req, res, next) => {
  res.end('Will send all the dishes to you!');
})

.post((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})

.put((req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /users');
})

.delete((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
})

module.exports = userRouter;
