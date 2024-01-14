const express = require('express');
const router = express.Router({ mergeParams: true });
const StateUserController = require('../controller/state-user-controller');

router.get('/', async (req, res) => {
  console.log(`[StateUserRouter] [${req.method}] ${req.url}`);

  StateUserController.index(req, res);
});

module.exports = router;
