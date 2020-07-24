// Database
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://msanchezalcon:MsaMsa1@@cluster0.q8yv1.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })

//Model
const Item = require('../models/Item.model')

// Data
const items = [
    {
        name: 'glasses',
        description: 'red sunglasses',
        category: 'accessories',
        // foundBy: '5f181cf640c260e9dfa6f8d3',
        imageUrl: 'dfegrhetjrky',
        location: { type: 'Point', coordinates: [40.4, 40.7] }
    },
    {
        name: 'wallet',
        description: 'blue wallet',
        category: 'accessories',
        // foundBy: '5f181cf640c260e9dfa6f8d3',
        imageUrl: 'dfegrhetjrky',
        location: { type: 'Point', coordinates: [-3.6, -3.7] }
    }]



// Seed
Item.create(items)
    .then(allTheItems => {
        console.log(`Created ${allTheItems.length} items`)
        mongoose.connection.close()
    })
    .catch(err => console.log('There was an error creating the items', err))