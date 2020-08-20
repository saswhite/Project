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
                $('.box').html('')
                let html = ''
                if (result) {

                }
            },
            error: (error) => {
                console.log(error)
            }
        })
    }
}
