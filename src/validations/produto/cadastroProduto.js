const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    nomeProduto: Joi.string().required(),
    descricaoProduto: Joi.string().required(),
    categoriaId: Joi.number().required(),
  }),
});
