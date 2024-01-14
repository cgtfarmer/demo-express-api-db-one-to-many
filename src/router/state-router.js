const express = require('express');
const router = express.Router();
const StateController = require('../controller/state-controller');

router.get('/', async function(request, response) {
  console.log(`[StateRouter] [${request.method}] ${request.url}`);

  StateController.index(request, response);
});

router.get('/:id', async function(request, response) {
  console.log(`[StateRouter] [${request.method}] ${request.url}`);

  StateController.show(request, response);
});

router.post('/', async function(request, response) {
  console.log(`[StateRouter] [${request.method}] ${request.url}`);

  StateController.create(request, response);
});

router.put('/:id', async function(request, response) {
  console.log(`[StateRouter] [${request.method}] ${request.url}`);

  StateController.update(request, response);
});

router.delete('/:id', async function(request, response) {
  console.log(`[StateRouter] [${request.method}] ${request.url}`);

  StateController.destroy(request, response);
});

module.exports = router;

