let content = document.getElementsByClassName('content')[0]
let text = document.getElementsByClassName('text')[0]


document.onkeydown = function (ev) {
    var event = ev || event
    if (event.keyCode == 13) {
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000/chat/chatBox',
            data: {
                text: text.value
            },
            success: (result) => {
                console.log(result)
            }
        })
    }
}
