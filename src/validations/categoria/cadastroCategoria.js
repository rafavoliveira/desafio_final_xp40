const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    nomeCategoria: Joi.string().required(),
    descricaoCategoria: Joi.string().required(),
  }),
});
