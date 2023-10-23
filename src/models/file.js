const { DataTypes } = require("sequelize");
const db = require("../config/database");

const File = db.define(
  "File",
  {
    filename: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "files",
  }
);

module.exports = File;
