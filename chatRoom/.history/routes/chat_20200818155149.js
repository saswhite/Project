const controller = require('../controller/chat')

module.exports = (router) => {
    router.get('/', controller.login)
    router.post('/chat/login', controller.getChat)
    router.get('/chat', controller.chat)
}
