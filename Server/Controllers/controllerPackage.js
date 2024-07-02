const { Op } = require("sequelize");
const { Package } = require("../models");

class ControllerPackage {
  static async create(req, res, next) {
    const {
      sender,
      senderAddress,
      recipient,
      recipientAddress,
      status,
      EkspedisiID,
    } = req.body;
    try {
      const newPackage = await Package.create({
        sender,
        senderAddress,
        recipient,
        recipientAddress,
        status,
        EkspedisiID,
      });
      res.status(201).json(newPackage);
    } catch (error) {
      next(error);
    }
  }

  static async get(req, res, next) {
    try {
      const packages = await Package.findAll();
      res.status(200).json(packages);
    } catch (error) {
      next(error);
    }
  }

  static async getById(req, res, next) {
    try {
      const packages = await Package.findByPk(req.params.id);
      if (!packages) throw { name: "not found" };
      res.status(200).json(packages);
    } catch (error) {
      next(error);
    }
  }

  static async update(req, res, next) {
    const {
      sender,
      senderAddress,
      recipient,
      recipientAddress,
      status,
      EkspedisiID,
    } = req.body;
    try {
      const isPackage = await Package.findByPk(req.params.id);
      if (!isPackage) throw { name: "not found" };
      await isPackage.update({
        sender,
        senderAddress,
        recipient,
        recipientAddress,
        status,
        EkspedisiID,
      });
      res.status(200).json(isPackage);
    } catch (error) {
      next(error);
    }
  }

  static async delete(req, res, next) {
    try {
      const isPackage = await Package.findByPk(req.params.id);
      if (!isPackage) throw { name: "not found" };
      await isPackage.destroy();
      res.status(200).json({ message: `Paket berhasil di hapus` });
    } catch (error) {
      next(error);
    }
  }

  static async getReports(req, res, next) {
    const { filter, sort } = req.query;
    let paramQuerySQL = {
      include: [
        {
          association: "Ekspedition",
          attributes: ["name"],
        },
      ],
      where: {},
      order: [["id", "ASC"]],
    };

    if (filter) {
      const query = filter.split(",");
      paramQuerySQL.where.EkspedisiID = { [Op.in]: query };
      console.log(filter, query);
    }

    if (sort) {
      let query;
      if (sort.charAt(0) !== "-") {
        query = [[sort, "ASC"]];
      } else {
        query = [[sort.replace("-", ""), "DESC"]];
      }
      paramQuerySQL.order = query;
    }
    try {
      const packages = await Package.findAll(paramQuerySQL);
      res.status(200).json(packages);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ControllerPackage;
