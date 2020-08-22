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
    let username = JSON.parse(data)
    let name = username.name
    let avatar = username.avatar

    let userdata = {
        nickName: name,
        content,
        avatar,
        createAt: new Date()
    }

    await services.insert(userdata)
}

module.exports = {
    insert,
    find,
    updateOne
}