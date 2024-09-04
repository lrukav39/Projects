
const container = document.getElementById('container')

function setColor(color) {
    container.style.backgroundColor = color
}

function randomColor() {
    const red = Math.round(Math.random() * 255) 
    const green = Math.round(Math.random() * 255) 
    const blue = Math.round(Math.random() * 255) 

    const color = `rgb(${red}, ${green}, ${blue})`
    container.style.backgroundColor = color
}