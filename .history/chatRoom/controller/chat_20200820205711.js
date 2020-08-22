const { getRandomImg: getAvatar } = require('../common/utils')
const services = require('../services/chat')
const _ = require('lodash')

async function login(ctx, next) {
    await ctx.render('login')
}

async function getChat(ctx, next) {
    const { name } = ctx.request.body

    let data = {
        status: 'success'
    }
    let avatar = await getAvatar()
    ctx.cookies.set('username', JSON.stringify({ name, avatar }))

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
        console.log(user)
        if (user.name) {
            let users = await services.find({})
            let name = user.name
            ctx.state = {
                name,
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
    await services.setContents(user, content)
    let result = await services.find({})
    ctx.response.body = result
}

async function checkBox(ctx, next) {
    const { content } = ctx.request.body


    let flagT = await services.findandsort()
    if (flagT) {
        if (JSON.stringify(flagT) != '[]') {
            ctx.response.body = {
                flagT,
                content: 'success'
            }
        } else {
            ctx.response.body = {
                content: 'failed'
            }
        }
    }
}

async function getTips(ctx, next) {
    let Tips = await services.find({})
    ctx.response.body = Tips
}

module.exports = {
    login,
    getChat,
    chat,
    getChatBox,
    checkBox,
    getTips
}