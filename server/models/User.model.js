const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({ //añadir nombre e email perfil
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
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    },
    foundItems: [{ type: Schema.Types.ObjectId, ref: "Item" }]
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User

// Dudas acerca de vincular item a persona o no