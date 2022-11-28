const express = require('express');
const envelopeRouter = express.Router();

const envelopes = [];

envelopeRouter.get('/', (req, res, next) => {
  res.send(envelopes);
});

envelopeRouter.post('/', (req, res, next) => {
  const id = envelopes.length + 1;
  const title = req.body.title;
  const budget = req.body.budget;
  const newEnvelope = {
    id,
    title,
    budget
  };
  envelopes.push(newEnvelope);
  res.status(201).send(envelopes[envelopes.length - 1]);
});

envelopeRouter.get('/:id', (req, res, next) => {
  const envelopeId = req.params.id;
  if (envelopeId != 0 && envelopeId <= envelopes.length) {
    res.send(envelopes[envelopeId - 1]);
  } else {
    res.status(400).send('This envelope id is not valid!');
  }
});

envelopeRouter.put('/:id', (req, res, next) => {
  const envelopeId = req.params.id;
  if (envelopeId != 0 && envelopeId <= envelopes.length) {
    const id = envelopeId;
    const updatedTitle = req.body.title;
    const updatedBudget = req.body.budget;
    const updatedEnvelope = {
      id,
      title: updatedTitle,
      budget: updatedBudget
    };
    envelopes[envelopeId - 1] = updatedEnvelope;
    res.status(200).send(envelopes[envelopeId - 1]);
  } else {
    res.status(400).send('This envelope id is not valid!');
  }
});

envelopeRouter.delete('/:id', (req, res, next) => {
  const envelopeId = req.params.id;
  if (envelopeId != 0 && envelopeId <= envelopes.length) {
    envelopes.splice(envelopeId - 1, 1);
    res.status(200).send('The envelope is successfully deleted.');
  } else {
    res.status(400).send('This envelope id is not valid!');
  }
});

envelopeRouter.post('/transfer/:from/:to', (req, res, next) => {
  const fromId = req.params.from;
  const toId = req.params.to;
  const amount = req.body.amount;
  envelopes[fromId - 1].budget -= amount;
  envelopes[toId - 1].budget += amount;
  res
    .status(200)
    .send(
      `${amount} dollars successfully transfered to ${
        envelopes[toId - 1].title
      }.`
    );
});

module.exports = envelopeRouter;
