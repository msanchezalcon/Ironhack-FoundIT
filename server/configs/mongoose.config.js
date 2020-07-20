const mongoose = require('mongoose')
require('dotenv').config()

mongoose
    .connect('mongodb+srv://msanchezalcon:MsaMsa1@@cluster0.q8yv1.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

module.exports = mongoose