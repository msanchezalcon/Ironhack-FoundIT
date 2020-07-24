module.exports = app => {

    // Base URLS
    app.use('/api', require('./auth.routes'))
    app.use('/api', require('./roles.routes'))
    app.use('/api/items', require('./item.routes'))
}