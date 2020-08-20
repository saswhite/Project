const { getRandomImg: getAvatar } = require('../common/utils')
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

    if (user) {
        user = JSON.parse(user)
        if (user.name) {
            await ctx.render('chat')
        } else {
            ctx.redirect('/')
        }
    } else {
        ctx.redirect('/')
    }

}

async function getChatBox(ctx, next) {
    let nickName = ctx.cookies.get('username')
    const { content } = ctx.request.body
    let data = {
        nickName,
        content
    }

}

module.exports = {
    login,
    getChat,
    chat,
    getChatBox
}