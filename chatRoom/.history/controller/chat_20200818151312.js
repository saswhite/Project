async function welcome(ctx, next) {
    await ctx.render('login')
}

async function login(ctx, next) {
    const { name } = ctx.request.body
    let data = {
        status: 'success'
    }
    if (getCookie(ctx)) {
        ctx.response.body = data
    }
    else {
        data.status = 'failed'
    }
}

module.exports = {
    welcome,
    login
}