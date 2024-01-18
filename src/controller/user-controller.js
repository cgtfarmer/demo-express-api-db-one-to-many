const UserRepository = require('../repository/user-repository');

class UserController {

  static async index(req, res) {
    const stateId = req.params.id;
    console.log(`[UserController#index] stateId=${stateId}`);

    const response = await UserRepository.findAll(stateId);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async show(req, res) {
    const { id } = req.params;
    console.log(`[UserController#show] ${id}`);

    const response = await UserRepository.findById(id);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async create(req, res) {
    const data = req.body;
    console.log(`[UserController#create] ${JSON.stringify(data)}`);

    const response = await UserRepository.create(data);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(201).json(response);
  }

  static async update(req, res) {
    const { id } = req.params;
    const data = req.body;
    console.log(`[UserController#update] ${id}, ${JSON.stringify(data)}`);

    data.id = id;

    const response = await UserRepository.update(data);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async destroy(req, res) {
    const { id } = req.params;
    console.log(`[UserController#destroy] ${id}`);

    await UserRepository.destroy(id);

    const response = { msg: 'Deleted successfully' };

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }
}

module.exports = UserController;
