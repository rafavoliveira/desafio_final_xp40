const usuarioModel = require("../models/usuarioModel");
const bcrypt = require("bcryptjs");

const { UniqueConstraintError } = require("sequelize");

const usuarioController = {
    listarUsuario: async (req, res) => {
        try{
            const listagemUsuario = await usuarioModel.findAll();
            res.status(200).json(listagemUsuario);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async usuario_atual (req, res){
        try{
            res.json(req.user);
            console.log(req.user);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async buscaUsuarioId(req, res) {
        try{
            const { idUsuario } = req.params;
            const validaUsuario = await usuarioModel.findByPk(idUsuario);

            if(!validaUsuario){
              return res.status(404).json("Esse usuário não existe");
            }

            const buscaUsuario = await usuarioModel.findAll({
                where: {
                    idUsuario
                },
            });
            res.status(200).json(buscaUsuario);
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },
    async cadastrarUsuario(req, res) {
        try{
            const { fotoUsuario, nomeUsuario, emailUsuario, senhaUsuario } = req.body;
            const novaSenha = bcrypt.hashSync(senhaUsuario, 10);

            const novoUsuario = await usuarioModel.create({
              fotoUsuario, nomeUsuario, emailUsuario, senhaUsuario: novaSenha,
            });

            res.status(201).json(novoUsuario);
        }catch(error){
            if(error instanceof UniqueConstraintError) {
              return res.status(400).json("Email já cadastrado!");
            }

            res.status(500).json("Ocorreu algum erro!");
        }
    },

    async deletarUsuario(req, res) {
        try{
            const { idUsuario } = req.params;
            const validarUsuario = await usuarioModel.findByPk(idUsuario);

            if(!validarUsuario){
              return res.status(404).json("Esse usuário não existe");
            }
            await usuarioModel.destroy({
                where: {
                    idUsuario,
                },
            });

            res.status(200).json("Usuado removido com sucesso!");
        }catch(error){
            res.status(500).json("Ocorreu algum erro!");
        }
    },

    async atualizarUsuario(req, res) {
        try{
            const { idUsuario } = req.params;
            const { fotoUsuario,nomeUsuario, emailUsuario } = req.body;
            const validarUsuario = await usuarioModel.findByPk(idUsuario);
            
            if(!validarUsuario){
                return res.status(404).json("Esse usuário não existe");
            }
            await usuarioModel.update({
                fotoUsuario, nomeUsuario, emailUsuario,
            },{
                where:{
                    idUsuario,
                }
            });

            res.status(200).json("Usuário atualizado com sucesso!");
        }catch(error){
            if(error instanceof UniqueConstraintError){
                return res.json("Email já cadastrado!");
            }
        }
    },
};

module.exports = usuarioController;
