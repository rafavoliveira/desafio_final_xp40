const express = require("express");
const router = express.Router();
// Controllers
const usuarioController = require("../controllers/usuarioController");
const categoriaController = require("../controllers/categoriaController");
const produtoController = require("../controllers/produtoController");
const autenticacaoController = require("../controllers/autenticacaoController");
//validação
const permissao = require("../middlewares/permissoes");
const validaCadastroUsuario = require("../validations/usuario/cadastroUsuario");
const validaCadastroProduto = require("../validations/produto/cadastroProduto");
const validaCadastroCategoria = require("../validations/categoria/cadastroCategoria");
// Rotas - Categoria
router.get("/categoria", categoriaController.listarCategoria);
router.get("/categoria/:idCategoria", categoriaController.buscaCategoriaId);
router.post(
  "/categoria",
  permissao,
  validaCadastroCategoria,
  categoriaController.cadastrarCategoria
);
router.delete(
  "/categoria/:idCategoria",
  permissao,
  categoriaController.deletarCategoria
);
router.put(
  "/categoria/:idCategoria",
  permissao,
  categoriaController.atualizarCategoria
);

// Rotas - Produto
router.get("/produto", produtoController.listarProduto);
router.get("/produto/:idProduto", produtoController.buscaProdutoId);
router.post(
  "/produto",
  permissao,
  validaCadastroProduto,
  produtoController.cadastrarProduto
);
router.put(
  "/produto/:idProduto",
  permissao,
  produtoController.atualizarProduto
);
router.delete(
  "/produto/:idProduto",
  permissao,
  produtoController.deletarProduto
);

// Rotas - Usuário
router.get("/usuario", usuarioController.listarUsuario);
router.get("/usuario/:idUsuario", usuarioController.buscaUsuarioId);
router.post(
  "/usuario",
  permissao,
  validaCadastroUsuario,
  usuarioController.cadastrarUsuario
);
router.delete(
  "/usuario/:idUsuario",
  permissao,
  usuarioController.deletarUsuario
);
router.put(
  "/usuario/:idUsuario",
  permissao,
  usuarioController.atualizarUsuario
);

// Autenticação
router.post("/login", autenticacaoController.login);

module.exports = router;
