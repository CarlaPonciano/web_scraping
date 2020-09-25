module.exports = async function verifyValidUrl (url) {
    var formatValidUrl = new RegExp('^(https?:\\/\\/)?'+
                            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
                            '((\\d{1,3}\\.){3}\\d{1,3}))'+
                            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
                            '(\\?[;&a-z\\d%_.~+=-]*)?'+
                            '(\\#[-a-z\\d_]*)?$','i');

    const isValidUrl = formatValidUrl.test(url)

    return isValidUrl;
}