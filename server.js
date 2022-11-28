const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRouter = require('./server/api');

const app = new express();

// Port for the server
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mount imported apiRouter for all api routes
app.use('/api', apiRouter);

// Start up the server at configured port
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
