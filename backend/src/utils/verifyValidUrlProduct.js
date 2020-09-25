module.exports = async function verifyUrlAmericanas (url) {
    var formatValidUrlProduct = new RegExp('produto');

    const isValidUrlProduct = formatValidUrlProduct.test(url)

    return isValidUrlProduct;
}