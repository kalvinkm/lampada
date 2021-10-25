const lampOn = document.getElementById('on-button')
const lampOff = document.getElementById('off-button')
const buyAnother = document.getElementById('another-lamp')
const lamp = document.getElementById('lamp-image')

function isBrokenLamp () {
    return lamp.src.indexOf('broken-lamp') > -1
}

function turnOn( ) {
    if(!isBrokenLamp ()) {
        lamp.src = './imgs/lamp-on.jpg'
    }
    
}

function turnOff () {
    if(!isBrokenLamp ()) {
        lamp.src = './imgs/lamp-off.jpg'
    }
    
}

function breakLamp () {
    lamp.src = './imgs/broken-lamp.jpg'

    buyAnother.style.display = 'inline-block'
}



lampOn.addEventListener ('click' , turnOn)

lampOff.addEventListener('click', turnOff)

lamp.addEventListener('mouseover', turnOn)

lamp.addEventListener('mouseleave', turnOff)

lamp.addEventListener('dblclick', breakLamp)