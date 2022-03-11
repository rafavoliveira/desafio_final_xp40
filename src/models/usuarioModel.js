const db = require("../database/connection");
const { DataTypes } = require("sequelize");

const usuario = db.define(
  "usuario",
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_usuario",
    },
    nomeUsuario: {
      type: DataTypes.STRING,
      field: "nome_usuario",
      allowNull: false,
    },
    emailUsuario: {
      type: DataTypes.STRING,
      field: "email_usuario",
      allowNull: false,
    },
    senhaUsuario: {
      type: DataTypes.STRING,
      field: "senha_usuario",
      allowNull: false,
    },
  },
  { tableName: "usuario" }
);

module.exports = usuario;
