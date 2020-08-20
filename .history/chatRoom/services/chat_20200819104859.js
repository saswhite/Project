const models = require('../models/chat')

async function insert(query) {
    await models.insertOne(query)
}

module.exports = {
    insert
}