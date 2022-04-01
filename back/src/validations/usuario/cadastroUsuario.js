const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    fotoUsuario: Joi.string().required(),
    nomeUsuario: Joi.string().required(),
    emailUsuario: Joi.string().email().required(),
    senhaUsuario: Joi.string().required(),
  }),
});
