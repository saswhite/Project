let content = document.getElementsByClassName('content')[0]
let text = document.getElementsByClassName('text')[0]

window.onload = function () {
    $('.content').scrollTop($('.content').prop('scrollHeight'))
    setInterval(function () {
        $.ajax({
            type: 'post',
            url: 'http://192.168.8.195:3000/chat/checkBox',
            data: {
                content: '是否有数据'
            },
            success: (result) => {
                $('.content').html('')
                let html = ''
                result.forEach((items) => {
                    let string = JSON.stringify(items.createAt).replace(/\"/g, '')
                    console.log(string)
                    html += `<div class="box">
                    <div class="box1">
                        <img src='${items.avatar}' class='avatar'>
                        <div class="chat_name">${items.nickName}</div>

                    </div>
                    <div class="box2">
                        <div class="chat_content">${items.content}</div>
                    </div>
                    <div class="box3">
                        <div class='chat_date'>${string.replace(/\"/g, '')}</div>
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
    }, 2000)
}


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
                // $('.content').scollTop($('.content').prop('scrollHeight'))

                // let ele = document.getElementsByClassName('content')[0]

                // ele.scrollTop = ele.scrollHeight

                $('.content').scrollTop($('.content').prop('scrollHeight'))

            },
            error: (error) => {
                console.log(error)
            }
        })
    }
}
