import Joi from 'joi';

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇГг ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters from 1 to 20',
        'string.required': 'Field is required',
    }),
    username: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇГг0-9 ]{1,20}$/).required().messages({
        'string.pattern.base': 'Only letters from 1 to 20',
        'string.required': 'Field is required',
    }),
});

export {
    userValidator
};

