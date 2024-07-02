const { Expedition } = require("../models");

class ControllerExpedition {
  static async get(req, res, next) {
    try {
      const packages = await Expedition.findAll();
      res.status(200).json(packages);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerExpedition;
