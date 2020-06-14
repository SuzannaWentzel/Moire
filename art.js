// +++++ CANVAS STUFF +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// === VARIABLES ==========================================================

// time variable
let t = 0;

// animation parameters
let numberOfLines = 160;
let weight = 1;

// function 1
let zoom = 250;
let R = 1.0;
let r = 0.58;
let d = 0.29;       // r/2
let timefactor1 = 0.05;

// function 2
let zoom2 = 300;
let R2 = 2;
let r2 = 0.9;
let d2 = 0.45;     // r2/R2
let timefactor2 = 0.015;

// color variables
let k = 0;
let INTERVAL_PER_LINE = 0.75;



// === INITIALIZING P5 =====================================================

function setup() {
    let canvas = createCanvas(1000, 600);
    canvas.parent("canvas-placeholder");
}

function draw() {
    background(0);
    
    colorMode(HSB, 360);

    strokeWeight(weight);
    
    translate(width/2, height/2);
    
    for(let i = 0; i <numberOfLines; i++ ){
        stroke(getColor(i), 360, i * 250/numberOfLines);
        line (x1(timefactor1*(i+t)), y1(timefactor1*(i+t)), x2(timefactor2*(t+i)), y2(timefactor2*(t+i)));
    }
    t += 1;
    k = (k + INTERVAL_PER_LINE) % 360;
}


// === HELPER FUNCTIONS =========================================================
function getColor(i) {
    let c = k - ((numberOfLines - i) * INTERVAL_PER_LINE);
    while (c < 0) {
        c += 360;
    }
    
    return (int) (c % 360);
}

// hypotrochoid 1
function x1(t) {
    return zoom * ((R-r) * cos (t) + d * cos (((R-r)/r) * t));
}

function y1(t) {
    return zoom * ((R-r) * sin (t) - d * sin (((R-r)/r) * t));
}

// hypotrochoid 2
function x2(t) {
    return zoom2 * ((R2-r2) * cos(t) + d2 * cos(((R2-r2)/r2) * t));
}

function y2(t) {
    return zoom2 * ((R2-r2) * sin(t) - d2 * sin(((R2-r2)/r2) * t));
}


// === event handlers ==================================================================

function changeNumLines(value) {
    numberOfLines = value;
    document.getElementById('txtNumLines').innerHTML = value;
}

function changeLineWeight(value) {
    weight = value;
    document.getElementById('txtLineWeight').innerHTML = value;
}


// === function 1 ============================================
function changeZoom1(value) {
    zoom = value;
    document.getElementById('txtZoom1').innerHTML = value;
}

function changeR1(value) {
    R = value;
    document.getElementById('txtR1').innerHTML = value;
}

function changer1(value) {
    r = value;
    document.getElementById('txtr1').innerHTML = value;
}

function changed1(value) {
    d = value;
    document.getElementById('txtd1').innerHTML = value;
}

function changeTimefactor1(value) {
    timefactor1 = value;
    document.getElementById('txtTimeFactor1').innerHTML = value;
}


// === function 2 =============================================
function changeZoom2(value) {
    zoom2 = value;
    document.getElementById('txtZoom2').innerHTML = value;
}

function changeR2(value) {
    R2 = value;
    document.getElementById('txtR2').innerHTML = value;
}

function changer2(value) {
    r2 = value;
    document.getElementById('txtr2').innerHTML = value;
}

function changed2(value) {
    d2 = value;
    document.getElementById('txtd2').innerHTML = value;
}

function changeTimefactor2(value) {
    timefactor2 = value;
    document.getElementById('txtTimeFactor2').innerHTML = value;
}