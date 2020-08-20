const models = require('../models/chat')

async function insert(query) {
    await models.insertOne(query)
}

async function find(query) {
    return await models.find(query)
}

async function updateOne(query) {
    await models.updateOne(query)
}

module.exports = {
    insert,
    find
}