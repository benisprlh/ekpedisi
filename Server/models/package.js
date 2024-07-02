"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Package extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Package.belongsTo(models.Ekspedition);
    }
  }
  Package.init(
    {
      sender: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Nama pengirim tidak boleh kosong",
          },
          notEmpty: {
            msg: "Nama pengirim tidak boleh kosong",
          },
        },
      },
      senderAddress: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notNull: {
            msg: "Alamat Pengirim tidak boleh kosong",
          },
          notEmpty: {
            msg: "Alamat Pengirim tidak boleh kosong",
          },
        },
      },
      recipient: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: {
            msg: "Nama penerima tidak boleh kosong",
          },
          notEmpty: {
            msg: "Nama penerima tidak boleh kosong",
          },
        },
      },
      recipientAddress: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: {
          notNull: {
            msg: "Alamat Penerima tidak boleh kosong",
          },
          notEmpty: {
            msg: "Alamat Penerima tidak boleh kosong",
          },
        },
      },
      EkspedisiID: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          notNull: {
            msg: "Ekspedisi ID tidak boleh kosong",
          },
          notEmpty: {
            msg: "Ekspedisi ID tidak boleh kosong",
          },
        },
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM("Dikirim", "Dalam Perjalanan", "Tiba di Tujuan"),
        validate: {
          notNull: {
            msg: "Status tidak boleh kosong",
          },
          notEmpty: {
            msg: "Status tidak boleh kosong",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Package",
    }
  );
  return Package;
};
