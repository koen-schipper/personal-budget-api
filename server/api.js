const express = require('express');
const envelopeRouter = require('./envelopes');
const apiRouter = express.Router();

apiRouter.use('/envelopes', envelopeRouter);

module.exports = apiRouter;
