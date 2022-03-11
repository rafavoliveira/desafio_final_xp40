const express = require("express");
const { deletarUsuario } = require("../controllers/usuarioController");
const router = express.Router();

// Controllers
const usuarioController = require("../controllers/usuarioController");

// Rotas - Categoria
router.get("/categoria");
router.post("/categoria");
router.put("/categoria/");
router.delete("/categoria/");

// Rotas - Produto
router.get("/produto");
router.post("/produto");
router.put("/produto/");
router.delete("/produto/");

// Rotas - Usuário
router.get("/usuario", usuarioController.listarUsuario);
router.post("/usuario", usuarioController.cadastrarUsuario);
router.delete("/usuario/:idUsuario", usuarioController.deletarUsuario);
router.put("/usuario/:idUsuario", usuarioController.atualizarUsuario);

module.exports = router;
