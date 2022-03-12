const produtoModel = require("./produtoModel");
const categoriaModel = require("./categoriaModel");
const usuarioModel = require("./usuarioModel");

produtoModel.belongsTo(categoriaModel, {
  foreignKey: "categoria_id",
});
categoriaModel.hasMany(produtoModel, {
  foreignKey: "categoria_id",
});
module.exports = {
  produtoModel,
  categoriaModel,
  usuarioModel,
};
