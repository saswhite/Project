const mongoose = require('mongoose')
const { Schema } = mongoose
const chatSchema = new Schema({
    name: String,
    avater: String,
    content: String,
    createAt: { type: Date, default: new Date() }
})

const Model = mongoose.model('users', chatSchema)

module.exports = {
    Model
}

