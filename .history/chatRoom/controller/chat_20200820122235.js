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
    let username = JSON.parse(user)
    let name = username.name
    let string = JSON.stringify(name)
    console.log(string)
    let avatarData = await services.find({ nickName: string })
    console.log(avatarData)
    let avatar = username.avatar

    let data = {
        nickName: name,
        content,
        avatar,
        createAt: new Date()
    }

    await services.insert(data)
    let result = await services.find({})
    ctx.response.body = result

}

async function checkBox(ctx, next) {
    const { content } = ctx.request.body


    let flag = await services.find({})
    if (flag) {
        if (JSON.stringify(flag) != '[]') {
            ctx.response.body = flag
        }
    }


}

module.exports = {
    login,
    getChat,
    chat,
    getChatBox,
    checkBox
}