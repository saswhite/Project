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

async function setContents(data) {
    let username = JSON.parse(async function setContents(data) {
        )
    let name = username.name
    let avatar = username.avatar

    let data = {
        nickName: name,
        content,
        avatar,
        createAt: new Date()
    }

    await services.insert(data)
}

module.exports = {
    insert,
    find,
    updateOne
}