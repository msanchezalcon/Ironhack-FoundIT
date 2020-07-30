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
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], default: [57.6965, 11.9806] }
    },
    imageUrl: {
        type: String,
        default: "https://www.fulltimefba.com/wp-content/uploads/2014/03/Lost-Box.jpg" //img por defecto
    },
    foundBy: { type: Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true
})

itemSchema.index({ location: '2dsphere' })

const Item = mongoose.model('Item', itemSchema)
module.exports = Item

