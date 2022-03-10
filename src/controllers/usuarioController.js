const usuarioModel = require("../models/usuarioModel")
const usuarioController = {
   
    listarUsuario: async(req, res) => {
        try{
            const listagemUsuario = await usuarioModel.findAll();
            res.json(listagemUsuario)
        }catch(error){
            res.status(500).json(`${error}`)
        }
    }
}


module.exports = usuarioController;