const { getRandomImg: getAvatar } = require('../common/utils')
const services = require('../services/chat')
const moment = require('moment')
const _ = require('lodash')
const getRandomImg = require('../common/utils')

async function login(ctx, next) {
    await ctx.render('login')
}

async function getChat(ctx, next) {
    const { name } = ctx.request.body
    let data = {
        status: 'success'
    }
    let avatar = await
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

    let users = ctx.cookies.get('username')
    if (users) {
        users = JSON.parse(users)
        if (users.name || users.nickName) {
            console.log(users)
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
    let nickName = username.name
    let avatar = await getAvatar()


    let data = {
        nickName,
        content,
        avatar
    }

    await services.insert(name)


    let users = await services.find({})

    ctx.cookies.set('username', JSON.stringify(users))


    ctx.response.body = { status: 'success' }
}

module.exports = {
    login,
    getChat,
    chat,
    getChatBox
}