const express = require('express');
const router = express.Router();
const UserController = require('../controller/user-controller');

router.get('/', async function(request, response) {
  console.log(`[UserRouter] [${request.method}] ${request.url}`);

  UserController.index(request, response);
});

router.get('/:id', async function(request, response) {
  console.log(`[UserRouter] [${request.method}] ${request.url}`);

  UserController.show(request, response);
});

router.post('/', async function(request, response) {
  console.log(`[UserRouter] [${request.method}] ${request.url}`);

  UserController.create(request, response);
});

router.put('/:id', async function(request, response) {
  console.log(`[UserRouter] [${request.method}] ${request.url}`);

  UserController.update(request, response);
});

router.delete('/:id', async function(request, response) {
  console.log(`[UserRouter] [${request.method}] ${request.url}`);

  UserController.destroy(request, response);
});

module.exports = router;
