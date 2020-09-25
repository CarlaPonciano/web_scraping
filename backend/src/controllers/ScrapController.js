const PuppeteerController = require('./PuppeteerController')

const verifyValidUrl = require('../utils/verifyValidUrl')
const verifyValidUrlAmericanas = require('../utils/verifyValidUrlAmericanas')
const verifyValidUrlProduct = require('../utils/verifyValidUrlProduct')

module.exports = {
    async getProductInformation (request, response, next) {
        const { url } = request.body    
        
        if ( await verifyValidUrl(url) ) {  
            if ( await verifyValidUrlAmericanas(url) ) {  
                if ( await verifyValidUrlProduct(url) ) {  
                    const productInformation = await PuppeteerController.start(url)

                    response.json(productInformation)
                } else {
                    response.json({ "erro": "É necessário que a URL seja de um produto." })  
                }  
            } else {
                response.json({ "erro": "A aplicação no momento aceita apenas URLs da Americanas." })  
            }
        } else {
            response.json({ "erro": "Informe uma URL válida." })  
        }    
        
    }
}