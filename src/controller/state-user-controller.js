const UserRepository = require('../repository/user-repository');

class StateUserController {

  static async index(req, res) {
    const stateId = req.params.id;
    console.log(`[StateUserController#index] stateId=${stateId}`);

    const response = await UserRepository.findAll(stateId);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }
}

module.exports = StateUserController;
