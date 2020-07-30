const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({ //añadir nombre e email perfil
    name: String,
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 2
    },
    avatar: {
        type: String,
        default: "https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
    },
    messages: [String],
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER'
    }
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User

// Dudas acerca de vincular item a persona o no