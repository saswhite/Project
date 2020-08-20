const { model } = require('./schema/chat')

async function insertOne(data) {
    const chatModel = new model(data)
    await chatModel.save()
}


async function find(query) {
    return model.find(query)
}

module.exports = {
    insertOne,
    find
}