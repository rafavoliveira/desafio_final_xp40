const produtoModel = require("../models");

const validaExistenciaProduto = {
  buscarProduto: async (req, res, next) => {
    const { idProduto } = req.header;
    const produto = await produtoModel.findByPk(idProduto);
    if (!produto) {
      return res.status(404).json("Esse produto não existe");
    }

    request.produto = produto;
    return next();
  },
};

module.exports = validaExistenciaProduto;
