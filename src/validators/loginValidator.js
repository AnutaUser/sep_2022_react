import Joi from "joi";

const loginValidator = Joi.object({
    username: Joi.string().min(2).max(15).required(),
    password: Joi.string().min(5).required(),
});

export {
    loginValidator
};
