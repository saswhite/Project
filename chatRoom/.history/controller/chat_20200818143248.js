async function login(ctx, next) {
    await ctx.render('login')
}

module.exports = {
    login
}