const _ = require('lodash')

async function getRandomImg() {
    let img = [
        'https://wx1.sbimg.cn/2020/08/19/3K5H1.png',
        'https://wx1.sbimg.cn/2020/08/19/3K4Al.jpg',
        'https://wx1.sbimg.cn/2020/08/19/3Hf4o.jpg',
        'https://wx2.sbimg.cn/2020/08/19/3HFvw.jpg',
        'https://wx2.sbimg.cn/2020/08/19/3HVhT.jpg'
    ]

    let index = _.random(0, img.length - 1)

    return img[index]
}


module.exports = {
    getRandomImg
}