window.onload = function{

}

/* 定义 */
let loginContainer = document.getElementsByClassName('login-container')[0]
let loginInput = document.getElementsByClassName('login-input')[0]
let loginBtn = document.getElementsByClassName('login-button')[0]

/* 功能和函数 */
function login() {
    let loginValue = loginInput.value
    $.ajax({
        type: 'post',
        url: 'http://192.168.8.195:3000/chat/login',
        data: {
            name: loginValue
        },
        success: (result) => {
            if (result.status == 'success') {
                window.location.href = '/chat'
            } else {
                alert('请重新输入')
            }
        },
        error: (error) => {
            console.log(error)
        }
    })
}




/* 事件 */
loginBtn.onclick = login