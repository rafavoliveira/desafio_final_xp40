const produtoModel = require("./produtoModel");
const categoriaModel = require("./categoriaModel");

produtoModel.belongsTo(categoriaModel, {
  foreingKey: "categoria_id",
});
categoriaModel.hasMany(produtoModel, {
  foreingKey: "categoria_id",
});
module.exports = {
  produtoModel,
  categoriaModel,
};
