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

async function setContents(data, content) {
    let username = JSON.parse(data)
    let name = username.name
    let avatar = username.avatar

    let userData = {
        nickName: name,
        content,
        avatar,
        createAt: new Date()
    }

    await insert(userData)
}

async function findandsort() {
    return await models.find()
}

module.exports = {
    insert,
    find,
    updateOne,
    setContents,
    findandsort
}