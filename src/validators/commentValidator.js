import Joi from 'joi';

const commentValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇГг ]{1,200}$/).required().messages({
        'string.pattern.base': 'Only letters from 1 to 20',
        'string.required': 'Field is required',
    }),
    email: Joi.string().regex(/^[\w-\.]+[1-9]+@([\w-]+\.)+[\w-]{2,4}$/).required().messages({
        'string.pattern.base': 'Only letters from 1 to 20',
        'string.required': 'Field is required',
    }),
});

export {
    commentValidator
};
