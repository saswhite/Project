let content = document.getElementsByClassName('content')[0]
let text = document.getElementsByClassName('text')[0]
let timer

window.onload = function () {
    $('.content').scrollTop($('.content').prop('scrollHeight'))
}
// stopPolling()
// longPolling()

text.onkeydown = function (ev) {
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
                    html += `<div class="box">
                    <div class="box1">
                        <img src='${items.avatar}' class='avatar'>
                        <div class="chat_name">${items.nickName}</div>

                    </div>
                    <div class="box2">
                        <div class="chat_content">${items.content}</div>
                    </div>
                    <div class="box3">
                        <div class='chat_date'>${moment(items.createAt).locale('zh-cn').format('YYYYMMMMDo aH:mm:ss')}</div>
                    </div>
                </div>`
                    $('.content').html(html)
                })

                $('.content').scrollTop($('.content').prop('scrollHeight'))

            },
            error: (error) => {
                console.log(error)
            }
        })
    }
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
                if (result) {
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
                }
            },
            error: (error) => {
                console.log(error)
            }
        })
    }, 2000)
}

function stopPolling() {
    if (timer) {
        clearInterval(timer)
    }
}