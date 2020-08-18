async function judgeCookie(ctx, data) {
    ctx.cookies.set('username', JSON.stringify(data))
}

module.exports = {
    judgeCookie
}