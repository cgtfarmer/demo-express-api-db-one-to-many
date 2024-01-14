const express = require('express');
const router = express.Router();
const stateUserRouter = require('./state-user-router');
const StateController = require('../controller/state-controller');

router.use('/:id/users', stateUserRouter);

router.get('/', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateController.index(req, res);
});

router.get('/:id', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateController.show(req, res);
});

router.post('/', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateController.create(req, res);
});

router.put('/:id', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateController.update(req, res);
});

router.delete('/:id', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateController.destroy(req, res);
});

module.exports = router;
