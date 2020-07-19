const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 1
    },
    avatar: {
        type: String,
        default: ""
    },
    found_items: [{ type: Schema.Types.ObjectId, ref: "Item" }]
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User