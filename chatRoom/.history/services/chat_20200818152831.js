async function judgeCookie(ctx) {
    ctx.cookies.get('username')
}

module.exports = {
    judgeCookie
}