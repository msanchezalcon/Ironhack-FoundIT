// Database
require('dotenv').config()
const mongoose = require('mongoose')

//must have connection string since it doesn't process env file
mongoose.connect('mongodb+srv://msanchezalcon:MsaMsa1@@cluster0.q8yv1.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true })

//Model
const Item = require('../models/Item.model')

// Data
const items = [
    {
        name: 'painting from john larsson',
        description: 'john larsson nr3 from gift shop',
        category: 'other',
        foundBy: '5f181cf640c260e9dfa6f8d3',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.6965, 11.9806] }
    },
    {
        name: 'airpods 2019 black',
        description: 'white and blue case',
        category: 'electronics',
        foundBy: '5f181cf640c260e9dfa6f8d3',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.6830, 11.9503] }
    },
    {
        name: 'children winter beanie',
        description: 'animal print, brand zara kids',
        category: 'clothes',
        foundBy: '5f1c84e262c9e305ba9f187f',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.700500, 11.955570] }
    },
    {
        name: 'women watch fossil',
        description: 'silver wristband',
        category: 'accessories',
        foundBy: '5f1c84e262c9e305ba9f187f',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.7064, 11.9639] }
    }]


// Seed
Item.create(items)
    .then(allTheItems => {
        console.log(`Created ${allTheItems.length} new items from seeds file`)
        mongoose.connection.close()
    })
    .catch(err => console.log('There was an error creating the items', err))