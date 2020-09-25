const puppeteer = require('puppeteer')

module.exports = {
    async start (url) {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(url)

        const productInformation = await this.getProductInformation(
            page, 
            '#product-name-default', 
            '.main-offer__ContainerUI-sc-1c7pzd1-0 > div > div > span', 
            '#image-gallery-product > div > div > div > div > div > div > div > picture > source:nth-child(2)'
        )

        browser.close()

        return productInformation
    },

    async getProductInformation (page, selectorTitle, selectorPrice, selectorImage) {
        const title = await page.$eval(selectorTitle, title => title.innerText)
        const price = await page.$eval(selectorPrice, price => price.innerText)
        const imageUrl = await page.$eval(selectorImage, link => link.srcset)
    
        const productInformation = {
            title, 
            price,
            imageUrl
        }
    
        return productInformation
    }
}