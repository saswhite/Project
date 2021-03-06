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
    const { content } = ctx.request.body

    let nickName = ctx.cookies.get('username')
    let avatar = await getAvatar()


    let data = {
        nickName,
        content,
        avatar
    }
    ctx.response.body = data
}

module.exports = {
    login,
    getChat,
    chat,
    getChatBox
}