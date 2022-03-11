const usuarioModel = require("../models/usuarioModel");
const bcrypt = require("bcryptjs");
const usuarioController = {
  listarUsuario: async (req, res) => {
    try {
      const listagemUsuario = await usuarioModel.findAll();
      res.json(listagemUsuario);
    } catch (error) {
      res.status(500).json(`${error}`);
    }
  },

  async cadastrarUsuario(req, res) {
    const { nomeUsuario, emailUsuario, senhaUsuario } = req.body;
    const novaSenha = bcrypt.hashSync(senhaUsuario, 10);

    const novoUsuario = await usuarioModel.create({
      nomeUsuario,
      emailUsuario,
      senhaUsuario: novaSenha,
    });

    res.status(201).json(novoUsuario);
  },

  async deletarUsuario(req, res) {
    try {
      const { idUsuario } = req.params;

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
    const { idUsuario } = req.params;
    const { nomeUsuario, emailUsuario, senhaUsuario } = req.body;

    const usuarioAtualizado = await usuarioModel.update(
      {
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

    res.json("Usuário atualizado com sucesso!");
  },
};

module.exports = usuarioController;
