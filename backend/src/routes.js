const express = require('express')

const { celebrate, Joi } = require('celebrate')

const ScrapController = require('./controllers/ScrapController')

const routes = express.Router()

routes.get(
    '/scrap',
    celebrate({
        body: Joi.object().keys({
            url: Joi.string().required()
        })
    }, {
        abortEarly: false
    }), 
    ScrapController.getProductInformation)

module.exports = routes