const controller = require('../controller/chat')

module.exports = (router) => {
    router.get('/', controller.login)
    router.get('/chat', controller.chat)
    router.post('/chat/login', controller.getChat)
    router.post('/chat/chatBox', controller.getChatBox)
    router.post('/chat/checkBox', controller.checkBox)
}
