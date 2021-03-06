let text = document.getElementsByClassName('text')[0]
let timer
let userData


window.onload = function () {
    $('.content').scrollTop($('.content').prop('scrollHeight'))

}

getTips()
stopPolling()
longPolling()

text.onkeydown = function keydown(ev) {
    var event = ev || event
    if (event.keyCode == 13) {
        $.ajax({
            type: 'post',
            url: 'http://192.168.8.195:3000/chat/chatBox',
            data: {
                content: text.value
            },
            success: (result) => {
                text.value = ''
                $('.content').html('')
                let html = ''
                result.forEach((items) => {
                    let string = JSON.stringify(moment(items.createAt).locale('zh-cn').format('YYYYMMMMDo aH:mm:ss')).replace(/\"/g, '')
                    html += `<div class="box">
                <div class="box1">
                    <img src='${items.avatar}' class='avatar'>
                    <div class="chat_name">${items.nickName}</div>
    
                </div>
                <div class="box2">
                    <div class="chat_content">${items.content}</div>
                </div>
                <div class="box3">
                    <div class='chat_date'>${string}</div>
                </div>
            </div>`
                    $('.content').html(html)
                })
                $('.content').scrollTop($('.content').prop('scrollHeight'))



                $('.content').scrollTop($('.content').prop('scrollHeight'))
            },
            error: (error) => {
                console.log(error)
            }
        })
    }
}

function getTips() {
    $.ajax({
        type: 'get',
        url: 'http://192.168.8.195:3000/chat/getTips',
        data: {

        },
        success: (result) => {
            userData = result

        }
    })
}

function longPolling() {
    timer = setInterval(() => {
        $.ajax({
            type: 'post',
            url: 'http://192.168.8.195:3000/chat/checkBox',
            data: {
                content: '是否有数据'
            },
            success: (result) => {
                setBox(result)
                if (userData && JSON.stringify(userData) != '[]') {
                    let count = 0
                    let flag = false
                    let old = userData[userData.length - 1].createAt
                    result.flagT.filter((item) => {

                        flag = compareTime(item.createAt, old)
                        count++


                    })
                    if (flag) {
                        p.setAttribute('tips', '1')

                        $('.tips').css('display', 'block')

                        console.log(tips)
                        userData = result.flagT

                    } else {
                        $('.tips').css('display', 'none')
                    }

                }



            }
        })
    }, 5000)
}


function stopPolling() {
    if (timer) {
        clearInterval(timer)
    }
}

function setBox(result) {
    if (result.content == 'success') {
        $('.content').html('')
        let html = ''
        result.flagT.forEach((items) => {
            let string = JSON.stringify(moment(items.createAt).locale('zh-cn').format('YYYYMMMMDo aH:mm:ss')).replace(/\"/g, '')
            html += `<div class="box">
                <div class="box1">
                    <img src='${items.avatar}' class='avatar'>
                    <div class="chat_name">${items.nickName}</div>
    
                </div>
                <div class="box2">
                    <div class="chat_content">${items.content}</div>
                </div>
                <div class="box3">
                    <div class='chat_date'>${string}</div>
                </div>
            </div>`
            $('.content').html(html)
        })
        $('.content').scrollTop($('.content').prop('scrollHeight'))
    } else {
        console.log(result.content)
    }
}

function compareTime(time1, time2) {
    return moment(time1).isAfter(time2)
}