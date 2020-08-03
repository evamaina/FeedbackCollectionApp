// figure out which type of credentials to return ie prod/dev
if (process.env.NODE_ENV === 'production') {
    // we are in production, return prod set keys
    module.exports = require('/prod')
}else {
    //we are in development, return dev keys
    module.exports = require('/dev');
}
