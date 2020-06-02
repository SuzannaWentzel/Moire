let canvas = document.getElementById('moire');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height; 

let offX = 300;
let offY = 300;

let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

// for (let center = 0; center < 3; center++) {
//     for (let radius = 1; radius < 200; radius ++) {
//         let calculatedRadius = Math.pow(1.05, radius);
//         console.log(calculatedRadius);
//         ctx.beginPath();
//         ctx.arc(offX, offY, calculatedRadius, 0, 2*Math.PI);
//         ctx.stroke();
//     }

//     offX = offX + 300;    
// }

let t = 0;

function drawCircles() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.lineWidth = 5;

    for (let r = 1; r < 200; r++) {
        ctx.beginPath();
        ctx.strokeStyle = '#ff00ff';
        ctx.arc(offX, offY, 10*r, 0, Math.PI * 2); // or Math.pow(1.02, r)
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#00ffff';
        ctx.arc(1200-offX, offY, 10*r, 0, Math.PI *2);
        ctx.closePath();
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#ffff00';
        ctx.arc(600, 600-offY, 10*r, 0, Math.PI *2);
        ctx.closePath();
        ctx.stroke();
    }

    offX = 600 + 600 * Math.cos(t);
    offY = 300 + 300 * Math.sin(t);
    t += Math.PI / 600;

    requestAnimationFrame(drawCircles);
}

drawCircles();