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
        description: 'red sunglasses brand rayban',
        category: 'accessories',
        foundBy: '5f181cf640c260e9dfa6f8d3',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.7086, 11.9733] }
    },
    {
        name: 'wallet',
        description: 'woman blue wallet brand zara',
        category: 'accessories',
        foundBy: '5f181cf640c260e9dfa6f8d3',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.6830, 11.9503] }
    },
    {
        name: 'women nike sneakers',
        description: 'size 39 red and blue stripes',
        category: 'clothes',
        foundBy: '5f181cf640c260e9dfa6f8d3',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.7087, 11.9691] }
    },
    {
        name: 'ipad 3',
        description: 'golden case, year 2016',
        category: 'electronics',
        foundBy: '5f1c84e262c9e305ba9f187f',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.70111, 11.95778] }
    }]


// Seed
Item.create(items)
    .then(allTheItems => {
        console.log(`Created ${allTheItems.length} items`)
        mongoose.connection.close()
    })
    .catch(err => console.log('There was an error creating the items', err))