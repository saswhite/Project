async function judgeCookie(ctx) {
    let result = ctx.cookies.get('username')
    console.log(result)
}

module.exports = {
    judgeCookie
}