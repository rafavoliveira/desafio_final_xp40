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
    },
    emailUsuario: {
      type: DataTypes.STRING,
      field: "email_usuario",
    },
    senhaUsuario: {
      type: DataTypes.STRING,
      field: "senha_usuario",
    },
  },
  { tableName: "usuario" }
);

module.exports = usuario;
