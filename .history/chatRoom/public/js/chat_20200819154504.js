let content = document.getElementsByClassName('content')[0]
let text = document.getElementsByClassName('text')[0]


text.onkeydown = function (ev) {
    var event = ev || event
    if (event.keyCode == 13) {
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000/chat/chatBox',
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
                        <div class='chat_date'>${items.createAt}</div>
                    </div>
                </div>`
                    $('.content').html(html)
                })
                $('.content').scollTop = $('.content').scollHeight + $('.box').style.height

            },
            error: (error) => {
                console.log(error)
            }
        })
    }
}
