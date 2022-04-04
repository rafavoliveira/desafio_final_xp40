const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    fotoProduto: Joi.string().required(),
    nomeProduto: Joi.string().required(),
    descricaoProduto: Joi.string().required(),
    cargaHorariaProduto: Joi.number().required(),
    diasSemanaProduto: Joi.string().required(),
    dataSemanaProduto: Joi.string().required(),
    categoriaId: Joi.number().required(),
  }),
});
