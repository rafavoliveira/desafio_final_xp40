const categoriaModel = require("../models/categoriaModel");

const categoriaController = {

    listarCategoria: async (req, res) => {
        try{
            const listagemCategoria = await categoriaModel.findAll();
            res.status(200).json(listagemCategoria);

        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
      },
    buscaCategoriaId: async(req, res)=>{
        try{
            const { idCategoria } = req.params;
            const validarCategoria = await categoriaModel.findByPk(idCategoria);

            if(!validarCategoria){
              return res.status(404).json("Essa categoria não existe");
            }

            const buscaCategoria = await categoriaModel.findAll({
                where: { 
                    idCategoria
                }
            });

            res.status(200).json(buscaCategoria);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
  async cadastrarCategoria(req, res) {
        try{
            const { fotoCategoria, nomeCategoria, descricaoCategoria } = req.body;

            const novaCategoria = await categoriaModel.create({
              fotoCategoria, nomeCategoria, descricaoCategoria,
            });
            
            res.status(201).json(novaCategoria);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
  async deletarCategoria(req, res) {
        try{
            const { idCategoria } = req.params;
            const validarCategoria = await categoriaModel.findByPk(idCategoria);

            if(!validarCategoria){
              return res.status(404).json("Essa categoria não existe");
            }

            await categoriaModel.destroy({
                where: {
                    idCategoria,
                },
            });

            res.status(200).json("A categoria foi removida com sucesso!");
        }catch(error){
            res.status(500).json(error.name);
        }
  },
  async atualizarCategoria(req, res) {
        try{
            const { idCategoria } = req.params;
            const { fotoCategoria, nomeCategoria, descricaoCategoria } = req.body;
            const validaCategoria = await categoriaModel.findByPk(idCategoria);

            if(!validaCategoria){
              return res.status(404).json("Essa categoria não existe");
            }

            await categoriaModel.update({
                fotoCategoria, nomeCategoria, descricaoCategoria,
            },{
                where:{
                    idCategoria,
                }
            })

            res.status(200).json("Categoria atualizada com sucesso!");
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
};

module.exports = categoriaController;
