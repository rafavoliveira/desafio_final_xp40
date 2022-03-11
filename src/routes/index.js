const express = require("express");
const { deletarUsuario } = require("../controllers/usuarioController");
const router = express.Router();

// Controllers
const usuarioController = require("../controllers/usuarioController");
const categoriaController = require("../controllers/categoriaController");
const produtoController = require("../controllers/produtoController");

// Rotas - Categoria
router.get("/categoria", categoriaController.listarCategoria);
router.post("/categoria", categoriaController.cadastrarCategoria);
router.delete("/categoria/:idCategoria", categoriaController.deletarCategoria);
router.put("/categoria/:idCategoria", categoriaController.atualizarCategoria);

// Rotas - Produto
router.get("/produto", produtoController.listarProduto);
router.post("/produto", produtoController.cadastrarProduto);
router.put("/produto/:idProduto", produtoController.atualizarProduto);
router.delete("/produto/:idProduto", produtoController.deletarProduto);

// Rotas - Usuário
router.get("/usuario", usuarioController.listarUsuario);
router.post("/usuario", usuarioController.cadastrarUsuario);
router.delete("/usuario/:idUsuario", usuarioController.deletarUsuario);
router.put("/usuario/:idUsuario", usuarioController.atualizarUsuario);

module.exports = router;
