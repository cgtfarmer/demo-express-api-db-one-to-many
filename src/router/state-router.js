const express = require('express');
const router = express.Router();
const StateController = require('../controller/state-controller');
const StateSummaryController = require('../controller/state-summary-controller');
const UserController = require('../controller/user-controller');

router.get('/', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateController.index(req, res);
});

router.post('/', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateController.create(req, res);
});

router.get('/summary', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateSummaryController.index(req, res);
});

router.get('/:id', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateController.show(req, res);
});

router.put('/:id', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateController.update(req, res);
});

router.delete('/:id', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateController.destroy(req, res);
});

router.get('/:id/summary', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  StateSummaryController.show(req, res);
});

router.get('/:id/users', async (req, res) => {
  console.log(`[StateRouter] [${req.method}] ${req.url}`);

  UserController.index(req, res);
});

module.exports = router;
