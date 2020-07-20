const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['books', 'clothes', 'electronics', 'accessories', 'other'],
        default: 'other'
    },
    location: {
        type: String,
        coordinates: [Number]
    },
    imageUrl: {
        type: String,
        default: "" //img por defecto por categoría
    },
    foundBy: {
        type: String,
        required: true
    } //username
}, {
    timestamps: true
})

itemSchema.index({ location: '2dsphere' })

const Item = mongoose.model('Item', itemSchema)
module.exports = Item

