const express = require("express");
const router = express.Router();
// Controllers
const usuarioController = require("../controllers/usuarioController");
const categoriaController = require("../controllers/categoriaController");
const produtoController = require("../controllers/produtoController");
//validação
const validaCadastroUsuario = require("../validations/usuario/cadastroUsuario");
const validaCadastroProduto = require("../validations/produto/cadastroProduto");
const validaCadastroCategoria = require("../validations/categoria/cadastroCategoria");

// Rotas - Categoria
router.get("/categoria", categoriaController.listarCategoria);
router.post(
  "/categoria",
  validaCadastroCategoria,
  categoriaController.cadastrarCategoria
);
router.delete("/categoria/:idCategoria", categoriaController.deletarCategoria);
router.put("/categoria/:idCategoria", categoriaController.atualizarCategoria);

// Rotas - Produto
router.get("/produto", produtoController.listarProduto);
router.post(
  "/produto",
  validaCadastroProduto,
  produtoController.cadastrarProduto
);
router.put("/produto/:idProduto", produtoController.atualizarProduto);
router.delete("/produto/:idProduto", produtoController.deletarProduto);

// Rotas - Usuário
router.get("/usuario", usuarioController.listarUsuario);
router.post(
  "/usuario",
  validaCadastroUsuario,
  usuarioController.cadastrarUsuario
);
router.delete("/usuario/:idUsuario", usuarioController.deletarUsuario);
router.put("/usuario/:idUsuario", usuarioController.atualizarUsuario);

module.exports = router;
