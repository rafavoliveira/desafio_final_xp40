const { categoriaModel, produtoModel } = require("../models");
const produto = require("../models/produtoModel");

const produtoController = {
    listarProduto: async (req, res) => {
        try{
            const listagemProduto = await produtoModel.findAll({
              include: categoriaModel,
            });
            res.status(200).json(listagemProduto);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async buscaProdutoId(req, res) {
        try{
            const { idProduto } = req.params;
            const validaProduto = await produtoModel.findByPk(idProduto);

            if(!validaProduto){
              return res.status(404).json("Esse produto não existe");
            }

            const buscaProduto = await produtoModel.findAll({
              include: categoriaModel,
              where:{
                  idProduto,
              }
            });

            res.status(200).json(buscaProduto);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },

    async cadastrarProduto(req, res) {
      try{
          const { fotoProduto, nomeProduto, descricaoProduto, cargaHorariaProduto, diasSemanaProduto, dataSemanaProduto, investimento_produto, categoriaId } = req.body;

          const novoProduto = await produtoModel.create({
            fotoProduto, nomeProduto, descricaoProduto, cargaHorariaProduto, diasSemanaProduto, dataSemanaProduto, investimento_produto, categoriaId,
          });

          res.status(201).json(novoProduto);
      }catch(error){
          res.status(500).json("Ocorreu algum erro!" + error);
      }
    },
    async deletarProduto(req, res) {
        try{
            const { idProduto } = req.params;
            const validaProduto = await produtoModel.findByPk(idProduto);

            if(!validaProduto){
              return res.status(404).json("Esse produto não existe");
            }

            produtoModel.destroy({
                where: {
                    idProduto,
                },
            });
            res.status(200).json("Produto foi removido com sucesso!");
        }catch(error) {
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async atualizarProduto(req, res) {
        try {
            const { idProduto } = req.params;
            const { fotoProduto, nomeProduto, descricaoProduto,
                cargaHorariaProduto, diasSemanaProduto, dataSemanaProduto, investimento_produto, categoriaId } = req.body;

            const validaProduto = await produtoModel.findByPk(idProduto);

            if(!validaProduto){
              return res.status(404).json("Esse produto não existe");
            }

            produtoModel.update({
                fotoProduto, nomeProduto, descricaoProduto, cargaHorariaProduto, diasSemanaProduto, dataSemanaProduto, investimento_produto, categoriaId,
            },{
                where:{
                    idProduto,
                }
            });
            res.status(200).json("Produto atualizado com sucesso!");
        }catch(error){
            res.status(500).json("Ocorreu algum erro!" + error);
        }
    },
};

module.exports = produtoController;