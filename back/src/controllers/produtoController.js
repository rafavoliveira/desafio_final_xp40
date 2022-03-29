const { categoriaModel, produtoModel } = require("../models");
const produto = require("../models/produtoModel");

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
  async buscaProdutoId(req, res) {
    try {
      const { idProduto } = req.params;
      const validaProduto = await produtoModel.findByPk(idProduto);

      if (!validaProduto) {
        return res.status(404).json("Esse produto não existe");
      }

      const buscaProduto = await produtoModel.findOne({
        where: { idProduto },
      });
      res.status(200).json(buscaProduto);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  async cadastrarProduto(req, res) {
    try {
      const { fotoProduto, nomeProduto, descricaoProduto, categoriaId } = req.body;
      const novoProduto = await produtoModel.create({
        fotoProduto,
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
      const validaProduto = await produtoModel.findByPk(idProduto);

      if (!validaProduto) {
        return res.status(404).json("Esse produto não existe");
      }
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
      const { fotoProduto, nomeProduto, descricaoProduto, categoriaId } = req.body;

      const validaProduto = await produtoModel.findByPk(idProduto);

      if (!validaProduto) {
        return res.status(404).json("Esse produto não existe");
      }

      produtoModel.update(
        {
          fotoProduto,
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
