
async function welcome(ctx, next) {
    await ctx.render('login')
}

async function login(ctx, next) {
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

async function getChat(ctx, next) {

    let user = ctx.cookies.get('username')

    if (user) {
        user = JSON.parse(user)
        if (user.name) {
            await ctx.render('chat')
        } else {
            ctx.redirect('/login')
        }
    }

}

module.exports = {
    welcome,
    login,
    getChat
}