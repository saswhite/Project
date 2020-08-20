const mongoose = require('mongoose')
const { Schema } = mongoose
const chatSchema = new Schema({
    name: String,
    avater: String,
    content: String,
    createAt: { type: Date, default: new Date() }
})

const usersModel = mongoose.model('users', userSchema)

module.exports = {
    usersModel
}

