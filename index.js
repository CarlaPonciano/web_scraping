const puppeteer = require('puppeteer')

async function start () {
    //const browser = await puppeteer.launch( { headless:false } )
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.americanas.com.br/produto/262983764/iphone-11-pro-max-64gb-prateado-6-5-ios-4g-wi-fi-camera-12mp-apple?pfm_carac=Loja%20Oficial%20Apple&pfm_page=seller&pfm_pos=grid&pfm_type=vit_product_grid&sellerId=20247322000147#info-section')

    const productInformation = await getProductInformation(
        page, '#product-name-default', 
        '.main-offer__ContainerUI-sc-1c7pzd1-0 > div > div > span', 
        '#image-gallery-product > div > div > div > div > div > div > div > picture > source:nth-child(2)'
    )

    console.log(productInformation)

    browser.close()
}

async function getProductInformation (page, selectorTitle, selectorPrice, selectorImage) {
    const title = await page.$eval(selectorTitle, title => title.innerText)
    const price = await page.$eval(selectorPrice, price => price.innerText)
    const imageUrl = await page.$eval(selectorImage, link => link.srcset)

    const product = {
        title, 
        price,
        imageUrl
    }

    return product
}

start()