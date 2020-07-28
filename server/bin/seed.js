// Database
require('dotenv').config()
const mongoose = require('mongoose')

//must have connection string since it doesn't process env file
mongoose.connect(`${process.env.DB_REMOTE}`, { useNewUrlParser: true, useUnifiedTopology: true })

//Model
const Item = require('../models/Item.model')

// Data
const items = [
    {
        name: 'tennis ball',
        description: 'brand new tennis ball brand F.G.H',
        category: 'other',
        foundBy: '5f181cf640c260e9dfa6f8d3',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.7086, 11.9733] }
    },
    {
        name: 'women Ralph Lauren coat',
        description: 'size S, brown and grey',
        category: 'clothes',
        foundBy: '5f181cf640c260e9dfa6f8d3',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.6830, 11.9503] }
    },
    {
        name: 'men scarf H&M',
        description: 'size S yellow and grey with dots',
        category: 'clothes',
        foundBy: '5f181cf640c260e9dfa6f8d3',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.7087, 11.9691] }
    },
    {
        name: 'MacBook Pro 13',
        description: 'year 2018, golden case',
        category: 'electronics',
        foundBy: '5f1c84e262c9e305ba9f187f',
        imageUrl: 'https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg',
        location: { type: 'Point', coordinates: [57.70111, 11.95778] }
    }]


// Seed
Item.create(items)
    .then(allTheItems => {
        console.log(`Created ${allTheItems.length} new items from seeds file`)
        mongoose.connection.close()
    })
    .catch(err => console.log('There was an error creating the items', err))