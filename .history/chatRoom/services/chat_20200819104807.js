const chatModel = require('../models/chat')

async function insert(query) {
    await chatModel.insertOne(query)
}