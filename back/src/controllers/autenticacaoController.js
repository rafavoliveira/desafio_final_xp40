const { usuarioModel } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");
const bcrypt = require("bcryptjs");

const autenticacaoController = {
    async login(req, res){
        const { emailUsuario, senhaUsuario } = req.body;

        const Usuario = await usuarioModel.findOne({
            where:{
                emailUsuario,
            },
        });

        if(!Usuario || !bcrypt.compareSync(senhaUsuario, Usuario.senhaUsuario)){
            return res.status(400).json("Email ou senha incorreta!");
        }

        const token = jwt.sign({
            idUsuario: Usuario.idUsuario,
            emailUsuario: Usuario.emailUsuario,
            nomeUsuario: Usuario.nomeUsuario,
            userType: "user",
        }, secret.key)

        return res.json(token);
    }
}

module.exports = autenticacaoController;