// === set sticky on navbar ==========================================
// window.onscroll = function() {
//     myFunction()
// };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// === smooth scroll =================================================
function scrollToId(id) {
    console.log(id);
    let top = document.getElementById(id).offsetTop;
    window.scroll({
        top,
        behavior: 'smooth'
    });
}

// === EXAMPLES ===============================================
function setValues(inNumLines, inLineWeight, inZoom1, inR1, inr1, ind1, inTimeInterval1, inZoom2, inR2, inr2, ind2, inTimeInterval2) {
    changeNumLines(inNumLines);
    changeLineWeight(inLineWeight);
    changeZoom1(inZoom1);
    changeR1(inR1);
    changer1(inr1);
    changed1(ind1);
    changeTimefactor1(inTimeInterval1);
    changeZoom2(inZoom2);
    changeR2(inR2);
    changer2(inr2);
    changed2(ind2);
    changeTimefactor2(inTimeInterval2);

    // scroll to the canvas
    scrollToId('line-drawings');
    
}