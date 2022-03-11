const express = require("express");
const { deletarUsuario } = require("../controllers/usuarioController");
const router = express.Router();

// Controllers
const usuarioController = require("../controllers/usuarioController");
const categoriaController = require("../controllers/categoriaController");

// Rotas - Categoria
router.get("/categoria", categoriaController.listarCategoria);
router.post("/categoria", categoriaController.cadastrarCategoria);
router.delete("/categoria/:idCategoria", categoriaController.deletarCategoria);
router.put("/categoria/:idCategoria", categoriaController.atualizatCategoria);

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
