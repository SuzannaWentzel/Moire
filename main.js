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