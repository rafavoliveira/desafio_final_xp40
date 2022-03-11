const categoriaModel = require("../models/categoriaModel");

const categoriaController = {
  listarCategoria: async (req, res) => {
    try {
      const listagemCategoria = await categoriaModel.findAll();
      res.json(listagemCategoria);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },
  async cadastrarCategoria(req, res) {
    try {
      const { nomeCategoria, descricaoCategoria } = req.body;
      const novaCategoria = await categoriaModel.create({
        nomeCategoria,
        descricaoCategoria,
      });
      res.status(201).json(novaCategoria);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },
  async deletarCategoria(req, res) {
    try {
      const { idCategoria } = req.params;
      categoriaModel.destroy({
        where: {
          idCategoria,
        },
      });
      res.json(`A categoria com id: ${idCategoria} foi deletado com sucesso!`);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },
  async atualizarCategoria(req, res) {
    try {
      const { idCategoria } = req.params;
      const { nomeCategoria, descricaoCategoria } = req.body;
      categoriaModel.update(
        {
          nomeCategoria,
          descricaoCategoria,
        },
        {
          where: {
            idCategoria,
          },
        }
      );
      res.json("Categoria atualizada com sucesso!");
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },
};

module.exports = categoriaController;
