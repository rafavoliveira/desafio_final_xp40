const usuarioModel = require("../models/usuarioModel");
const bcrypt = require("bcryptjs");
const { UniqueConstraintError } = require("sequelize");
const usuarioController = {
  listarUsuario: async (req, res) => {
    try {
      const listagemUsuario = await usuarioModel.findAll();
      res.json(listagemUsuario);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },
  async usuario_atual (req, res){
      try{
          res.json(req.user);
          console.log(req.user);
      }catch(error){
          res.status(500).json(`${error}`);
      }
  },
  async buscaUsuarioId(req, res) {
    try {
      const { idUsuario } = req.params;
      const validaUsuario = await usuarioModel.findByPk(idUsuario);

      if (!validaUsuario) {
        return res.status(404).json("Esse usuário não existe");
      }

      const buscaUsuario = await usuarioModel.findAll({
        where: { idUsuario },
      });
      res.status(200).json(buscaUsuario);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },
  async cadastrarUsuario(req, res) {
    try {
      const { fotoUsuario, nomeUsuario, emailUsuario, senhaUsuario } = req.body;
      const novaSenha = bcrypt.hashSync(senhaUsuario, 10);

      const novoUsuario = await usuarioModel.create({
        fotoUsuario,
        nomeUsuario,
        emailUsuario,
        senhaUsuario: novaSenha,
      });

      res.status(201).json(novoUsuario);
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        return res.json("Email já cadastrado!");
      }
    }
  },

  async deletarUsuario(req, res) {
    try {
      const { idUsuario } = req.params;
      const validaUsuario = await usuarioModel.findByPk(idUsuario);
      if (!validaUsuario) {
        return res.status(404).json("Esse usuário não existe");
      }
      await usuarioModel.destroy({
        where: {
          idUsuario,
        },
      });

      res.json(`O usuário com id: ${idUsuario} foi deletado com sucesso!`);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },

  async atualizarUsuario(req, res) {
    try {
      const { idUsuario } = req.params;
      const { fotoUsuario,nomeUsuario, emailUsuario, senhaUsuario } = req.body;
      const validaUsuario = await usuarioModel.findByPk(idUsuario);
      if (!validaUsuario) {
        return res.status(404).json("Esse usuário não existe");
      }
      await usuarioModel.update(
        {
          fotoUsuario,
          nomeUsuario,
          emailUsuario,
          senhaUsuario,
        },
        {
          where: {
            idUsuario,
          },
        }
      );
      res.status(200).json("Usuário atualizado!");
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        return res.json("Email já cadastrado!");
      }
    }
  },
};

module.exports = usuarioController;
