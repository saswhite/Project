const { model } = require('./schema/chat')

async function insertOne(data) {
    const chatModel = new model(data)
    await chatModel.save()
}


async function find(query) {
    return model.find(query)
}

async function update(query) {
    await model.updateOne(query)
}

module.exports = {
    insertOne,
    find
}