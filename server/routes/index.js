module.exports = app => {

    // Base URLS
    app.use('/api', require('./auth.routes'))
    app.use('/api', require('./roles.routes'))
    app.use('/api/items', require('./item.routes'))

    // CLOUDINARYCONFIG
    app.use('/api/files', require('./files.routes'))

    app.use((req, res) => {
        res.sendFile(__dirname + "/public/index.html");
    })
}