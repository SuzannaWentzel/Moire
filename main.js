// === VARIABLES ==========================================================

// time variable
let t = 0;

// animation parameters
let numberOfLines = 500;

// function 1
let ZOOMX = 500;
let ZOOMY = 500;
let R = 1.0;
let r = 7.0/12.0;
let d = r/2.0;

// function 2
let ZOOMX2 = 500;
let ZOOMY2 = 500;
let R2 = 2;
let r2 = 0.9;
let d2 = r2/R2;

// color variables
let k = 0;
let INTERVAL_PER_LINE = 0.75;



// === INITIALIZING P5 =====================================================

function setup() {
    createCanvas(1920, 1080);
}

function draw() {
    background(0);
    
    colorMode(HSB, 360);

    strokeWeight(2);
    
    translate(width/2, height/2);
    
    for(let i = 0; i <numberOfLines; i++ ){
        stroke(getColor(i), 360, i * 250/numberOfLines);
        line (x1(0.05*(i+t)), y1(0.05*(i+t)), x2(0.015*(t+i)), y2(0.015*(t+i)));
    }
    t += 1;
    k = (k + INTERVAL_PER_LINE) % 360;
}


// === HELPER FUNCTIONS =========================================================
function getColor(i) {
    let c = k - ((numberOfLines - i) * INTERVAL_PER_LINE);
    if (c < 0) {
        c += 360;
    }
    if (c < -360) {
        c += 2*360;
    }
    return (int) (c % 360);
}

// hypotrochoid 1
function x1(t) {
    return ZOOMX * ((R-r) * cos (t) + d * cos (((R-r)/r) * t));
}

function y1(t) {
    return ZOOMY * ((R-r) * sin (t) - d * sin (((R-r)/r) * t));
}

// hypotrochoid 2
function x2(t) {
    return ZOOMX * ((R2-r2) * cos(t) + d2 * cos(((R2-r2)/r2) * t));
}

function y2(t) {
    return ZOOMY * ((R2-r2) * sin(t) - d2 * sin(((R2-r2)/r2) * t));
}
