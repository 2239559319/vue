function init(canvas,x,y){
    const cxt = canvas.getContext('2d')
    const img = new Image()
    img.onload = ()=>{
        cxt.drawImage(img,0,0)
    }
    img.src = './canvas.png'

    setStyle(canvas,x,y)
    addCanvasListener(canvas)
}

function setStyle(canvas,x,y){
    styleObject = {
        position:'fixed',
        top:y,
        left:x
    }
    for(let property in styleObject){
        canvas.style[property] = styleObject[property]
    }
}

function addCanvasListener(canvas){
    let moving = false

    canvas.addEventListener('mousedown',()=>{
        moving = !moving
    })
    canvas.addEventListener('mousemove',(event)=>{
        if(moving){
            setStyle(canvas,`${event.x-150}px`,`${event.y-150}px`)
        }
    })
    canvas.addEventListener('mouseup',()=>{
        moving = !moving
    })
}

module.exports = {
    init
}