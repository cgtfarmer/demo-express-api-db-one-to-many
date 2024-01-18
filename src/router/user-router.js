const express = require('express');
const router = express.Router();
const UserController = require('../controller/user-controller');

router.get('/', async (req, res) => {
  console.log(`[UserRouter] [${req.method}] ${req.url}`);

  UserController.index(req, res);
});

router.post('/', async (req, res) => {
  console.log(`[UserRouter] [${req.method}] ${req.url}`);

  UserController.create(req, res);
});

router.get('/:id', async (req, res) => {
  console.log(`[UserRouter] [${req.method}] ${req.url}`);

  UserController.show(req, res);
});

router.put('/:id', async (req, res) => {
  console.log(`[UserRouter] [${req.method}] ${req.url}`);

  UserController.update(req, res);
});

router.delete('/:id', async (req, res) => {
  console.log(`[UserRouter] [${req.method}] ${req.url}`);

  UserController.destroy(req, res);
});

module.exports = router;
