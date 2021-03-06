const db = require("../database/connection");
const { DataTypes } = require("sequelize");
const categoriaModel = require("./categoriaModel");

const produto = db.define("produto",{
    idProduto:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: "id_produto",
    },
    fotoProduto:{
        type: DataTypes.STRING,
        field: "foto_produto",
    },
    nomeProduto:{
        type: DataTypes.STRING,
        field: "nome_produto",
    },
    descricaoProduto:{
        type: DataTypes.TEXT,
        field: "descricao_produto",
    },
    cargaHorariaProduto:{
        type: DataTypes.INTEGER,
        field: "carga_horaria_produto"
    },
    diasSemanaProduto:{
        type: DataTypes.STRING,
        field: "dias_semana_produto"
    },
    dataSemanaProduto:{
        type: DataTypes.STRING,
        field: "data_semana_produto"
    },
    investimentoProduto:{
        type: DataTypes.DOUBLE,
        field: "investimento_produto"
    },
    categoriaId:{
        type: DataTypes.INTEGER,
        field: "categoria_id",
        references: {
          model: categoriaModel,
          key: "id",
        },
    },
  },
  {
    tableName: "produto",
  }
);

module.exports = produto;
