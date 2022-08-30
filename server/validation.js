//validation
const Joi = require("joi");

//register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

//login validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

  return schema.validate(data);
};

//budget validation

const budgetValidation = (data) => {
  const schema = Joi.object({
    budget: Joi.number().min(1).required(),
    user: Joi.string().min(1).required(),
  });
  return schema.validate(data);
};

//expense validation
const expenseValidation = (data) => {
  const schema = Joi.object({
    expense: Joi.number().min(1).required(),
    user: Joi.string().min(1).required(),
    category: Joi.string().min(1).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.budgetValidation = budgetValidation;
module.exports.expenseValidation = expenseValidation;
