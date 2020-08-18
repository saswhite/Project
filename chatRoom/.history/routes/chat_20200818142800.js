const controller = require('../controller/chat')

module.exports = (router) => {
    router.get('/', controller.login)
}
