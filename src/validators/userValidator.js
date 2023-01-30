import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().min(2).max(15).required().messages({
        'string.required' : 'Field "name" is required'
    }),
    surname: Joi.string().min(2).max(15).required().messages({
        'string.required' : 'Field "surname" is required'
    }),
    age: Joi.number().min(16).max(120).required().messages({
        'number.required' : 'Age must be equal 16 or more'
    }),
});

export {
    userValidator
};
