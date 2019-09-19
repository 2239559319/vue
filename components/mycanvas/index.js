const  {init} = require('./src/lib')

function createCanvas(){
    const canvas = document.createElement('canvas')
    canvas.width = '300'
    canvas.height = '300'
    init(canvas,'300px','300px')
    document.body.appendChild(canvas)
}

module.exports = {
    createCanvas
}