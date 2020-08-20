let content = document.getElementsByClassName('content')[0]
let text = document.getElementsByClassName('text')[0]

window.onload = function () {

    document.onkeydown = function (ev) {
        var event = ev || event
        if (event.keyCode == 13) {
            alert('按了enter键')
        }
    }
}