const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    fotoCategoria: Joi.string().required(),
    nomeCategoria: Joi.string().required(),
    descricaoCategoria: Joi.string().required(),
  }),
});
