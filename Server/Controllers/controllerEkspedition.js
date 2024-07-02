const { Ekspedition } = require("../models");

class ControllerEkspedition {
  static async get(req, res, next) {
    try {
      const packages = await Ekspedition.findAll();
      res.status(200).json(packages);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerEkspedition;
