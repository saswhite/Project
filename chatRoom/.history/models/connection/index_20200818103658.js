const mongoose = require('mongoose')
async function initConnection() {
    await mongoose.connect('mongodb://localhost/local', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error) => {
        if (error) {
            console.log(error)
        }
        console.log('连接成功')
    })
}

module.exports = {
    initConnection
}