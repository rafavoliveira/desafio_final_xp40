const produtoModel = require("../models/produtoModel");

const { categoriaModel } = require("../models");

const produtoController = {
  listarProduto: async (req, res) => {
    try {
      const listagemProduto = await produtoModel.findAll({
        include: categoriaModel,
      });
      res.json(listagemProduto);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },
  async cadastrarProduto(req, res) {
    try {
      const { nomeProduto, descricaoProduto, categoriaId } = req.body;
      const novoProduto = await produtoModel.create({
        nomeProduto,
        descricaoProduto,
        categoriaId,
      });
      res.status(201).json(novoProduto);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },
  async deletarProduto(req, res) {
    try {
      const { idProduto } = req.params;
      produtoModel.destroy({
        where: {
          idProduto,
        },
      });
      res.json(`O produto com id: ${idProduto} foi deletado com sucesso!`);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },
  async atualizarProduto(req, res) {
    try {
      const { idProduto } = req.params;
      const { nomeProduto, descricaoProduto, categoriaId } = req.body;
      produtoModel.update(
        {
          nomeProduto,
          descricaoProduto,
          categoriaId,
        },
        {
          where: {
            idProduto,
          },
        }
      );
      res.json("Produto atualizado com sucesso!");
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },
};

module.exports = produtoController;
