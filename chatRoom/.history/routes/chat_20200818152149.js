const controller = require('../controller/chat')

module.exports = (router) => {
    router.get('/', controller.welcome)
    router.post('/login', controller.login)
    router.get('/chat', controller.getChat)
}
