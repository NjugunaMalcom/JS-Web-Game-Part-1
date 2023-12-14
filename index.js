function backG(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(url, left + w*100, bottom+h*100)
        }
    }
}
function newImage(image, left, bottom){
    let object = document.createElement('img')
    object.src = image
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(image, left, bottom){
    let object = newImage(image, left, bottom)
    object.addEventListener('dblclick',function(){
        object.remove()
    })
}
let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

backG('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
backG('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)

newImage('assets/green-character.gif', 100, 250)
newImage('assets/tree.png', 200, 450)
newImage('assets/pillar.png', 350, 250)
newImage('assets/pine-tree.png', 450, 350)
newImage('assets/crate.png', 150, 350)
newImage('assets/well.png', 500, 575)

newItem('assets/sword.png', 500, 555)
newItem('assets/shield.png', 165, 335)
newItem('assets/staff.png', 600, 250)