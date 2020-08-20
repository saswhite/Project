const { getRandomImg: getAvatar } = require('../common/utils')
const services = require('../services/chat')

async function login(ctx, next) {
    await ctx.render('login')
}

async function getChat(ctx, next) {
    const { name } = ctx.request.body
    let data = {
        status: 'success'
    }
    ctx.cookies.set('username', JSON.stringify({ name }))
    if (name) {
        ctx.response.body = data
    }
    else {
        data.status = 'failed'
        ctx.response.body = data
    }
}

async function chat(ctx, next) {

    let user = ctx.cookies.get('username')
    let users = await services.find({})
    if (user) {
        user = JSON.parse(user)
        if (user.name) {
            ctx.state = {
                users
            }
            await ctx.render('chat', ctx.state)
        } else {
            ctx.redirect('/')
        }
    } else {
        ctx.redirect('/')
    }

}

async function getChatBox(ctx, next) {
    const { content } = ctx.request.body

    let user = ctx.cookies.get('username')
    let username = JSON.parse(user)
    let nickName = username.name
    let avatar = await getAvatar()

    console.log(typeof nickName)

    let data = {
        nickName,
        content,
        avatar
    }
    // ctx.cookies.set('username', JSON.stringify(data))
    console.log(JSON.stringify(data))
    await services.insert(data)

    ctx.response.body = { status: 'success' }
}

module.exports = {
    login,
    getChat,
    chat,
    getChatBox
}