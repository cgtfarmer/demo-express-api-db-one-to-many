const StateSummaryRepository = require('../repository/state-summary-repository');

class StateSummaryController {

  static async index(req, res) {
    console.log('[StateSummaryController#index]');

    const response = await StateSummaryRepository.findAll();

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async show(req, res) {
    const { id } = req.params;
    console.log(`[StateSummaryController#show] ${id}`);

    const response = await StateSummaryRepository.findById(id);

    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }
}

module.exports = StateSummaryController;
