const { validate, Joi } = require("express-validation");
module.exports = validate({
  body: Joi.object({
    nomeUsuario: Joi.string().required(),
    emailUsuario: Joi.string().email().required(),
    senhaUsuario: Joi.string().min(8).required(),
  }),
});
