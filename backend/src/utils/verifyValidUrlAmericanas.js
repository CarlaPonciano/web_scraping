module.exports = async function verifyUrlAmericanas (url) {
    var formatValidUrlAmericanas = new RegExp('americanas');

    const isValidUrlAmericanas = formatValidUrlAmericanas.test(url)

    return isValidUrlAmericanas;
}