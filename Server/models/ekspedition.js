"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ekspedition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ekspedition.hasMany(models.Packages);
    }
  }
  Ekspedition.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Nama Ekspedisi tidak boleh kosong",
          },
          notEmpty: {
            msg: "Nama Ekspedisi tidak boleh kosong",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Ekspedition",
    }
  );
  return Ekspedition;
};
