/* 定义 */
let loginContainer = document.getElementsByClassName('login-container')[0]
let loginInput = document.getElementsByClassName('login-input')[0]
let loginBtn = document.getElementsByClassName('login-button')[0]

/* 功能和函数 */
function login() {
    let loginValue = loginInput.value
    console.log(loginValue)
    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/login',
        data: {
            name: loginValue
        },
        success: (result) => {
            console.log(result.status)
        },
        error: (error) => {
            console.log(error)
        }
    })
}

/* 事件 */
loginBtn.onclick = login