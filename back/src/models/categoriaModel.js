const db = require("../database/connection");
const { DataTypes } = require("sequelize");

const categoria = db.define("categoria",{
    idCategoria:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "id_categoria",
    },
    nomeCategoria:{
        type: DataTypes.STRING,
        field: "nome_categoria",
        allowNull: false,
    },
    descricaoCategoria:{
        type: DataTypes.TEXT,
        field: "descricao_categoria",
        allowNull: false,
    }
},{
    tableName: "categoria",
})

module.exports = categoria;