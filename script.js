const canvas = document.getElementById('canvas');
let colorInput = document.getElementById('color');
let clear = document.getElementById('clear');
let decreaseBtn = document.getElementById('dec');
let increaseBtn = document.getElementById('inc');
let sizeField = document.getElementById('size');



const ctx = canvas.getContext('2d');

let size = 5;

let x = 50;
let y = 50;
let color = 'black'

let isPressed = false;

const draw = (x, y) => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

canvas.addEventListener('click', function (e) {
    const x3 = e.offsetX
    const y3 = e.offsetY

    draw(x3, y3)
})

canvas.addEventListener('mousemove', function (e) {

    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        
        draw(x2, y2)
        drawLine(x, y, x2, y2)
        x = x2
        y = y2


    }

})


canvas.addEventListener('mousedown', function (e) {
    isPressed = true
    x = e.offsetX;
    y = e.offsetY;
})

canvas.addEventListener('mouseup', function () {
    isPressed = false
    x = undefined;
    y = undefined;
})

colorInput.addEventListener('change', function (e) {
    color = e.target.value;
    console.log(e.target.value)
})

clear.addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

})

increaseBtn.addEventListener('click', function (e) {
    size += 5
    if (size > 30) {
        size = 30
    }
    sizeField.innerText = size
})
decreaseBtn.addEventListener('click', function (e) {
    size -= 5
    if (size <= 5) {
        size = 5
    }
    sizeField.innerText = size
})
