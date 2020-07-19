const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: String,
    description: String,
    category: String,
    location: {
        type: { type: String },
        coordinates: [Number]
    },
    imageUrl: String
}, {
    timestamps: true
})

itemSchema.index({ location: '2dsphere' })

const Item = mongoose.model('item', itemSchema)
module.exports = Item