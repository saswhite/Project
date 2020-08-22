const { model } = require('./schema/chat')

async function insertOne(data) {
    const chatModel = new model(data)
    await chatModel.save()
}


async function find(query) {
    return model.find(query)
}

async function findandsort() {
    return await model.find({}).sort({ createAt: 1 })
}

async function count(time) {
    return await model.find({ createAt: { $gt: time } }).countDocuments()
}


module.exports = {
    insertOne,
    find,
    findandsort,
    count
}