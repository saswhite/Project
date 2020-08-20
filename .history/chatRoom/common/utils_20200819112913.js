const _ = require('lodash')

async function getRandomImg() {
    let img = [
        'https://sbimg.cn/image/3K5H1',
        'https://wx1.sbimg.cn/2020/08/19/3K4Al.jpg',
        'https://sbimg.cn/image/3Hf4o',
        'https://sbimg.cn/image/3HFvw',
        'https://sbimg.cn/image/3HVhT'
    ]

    let index = _.random(0, img.length - 1)

    return img[index]
}


module.exports = {
    getRandomImg
}