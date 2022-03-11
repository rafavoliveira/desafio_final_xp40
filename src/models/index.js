const produtoModel = require("./produtoModel");
const categoriaModel = require("./categoriaModel");

produtoModel.belongsTo(categoriaModel, {
  foreignKey: "categoria_id",
});
categoriaModel.hasMany(produtoModel, {
  foreignKey: "categoria_id",
});
module.exports = {
  produtoModel,
  categoriaModel,
};
