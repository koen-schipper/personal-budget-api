const express = require('express');
const apiRouter = express.Router();

apiRouter.get('/', (req, res, next) => {
  res.send('<h1>Hello, World</h1>');
});

module.exports = apiRouter;
