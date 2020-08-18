async function welcome(ctx, next) {
    await ctx.render('login')
}

async function login(ctx, next) {
    const { name } = ctx.request.body
    let data = {
        status: 'success'
    }
    if (name {
        ctx.response.body = data
    }
    else {
        data.status = 'failed'
        ctx.response.body = data
    }
}

module.exports = {
    welcome,
    login
}