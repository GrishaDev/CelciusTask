const Joi = require('joi');
const config = require('../config');
const { HttpError } = require ('../utils/Error');

const validParam = Joi.object({
    coin: Joi.string().required(),
});

const validQuery = Joi.object({
    base: Joi.string().required(),
    time: Joi.date().iso()
});

const isValidParams = (req, res, next) => {
    const { error } = validParam.validate(req.params);
    if(error) {
        sendError(error);
    }
    return next(); 
}

const isValidQuery = (req, res, next) => {
    const { error } = validQuery.validate(req.query);
    if(error) {
        sendError(error);
    }
    return next(); 
}



const sendError = (err) => {
    let msg = err.details[0].message;
    msg = msg.replace(/"/g, '');
    throw new HttpError(400, msg);
}

module.exports = { isValidParams, isValidQuery }