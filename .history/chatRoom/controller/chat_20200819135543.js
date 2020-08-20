const { getRandomImg: getAvatar } = require('../common/utils')
const services = require('../services/chat')
const moment = require('moment')
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
    let userData = {
        nickName: name,
        avatar
    }
    await services.insert()
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
    let users = await services.find({})
    if (user) {
        user = JSON.parse(user)
        if (user.name) {
            ctx.state = {
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
    let username = JSON.parse(user)



    let data = {
        nickName,
        content,
        avatar
    }

    await services.insert(data)

    ctx.response.body = { status: 'success' }
}

module.exports = {
    login,
    getChat,
    chat,
    getChatBox
}