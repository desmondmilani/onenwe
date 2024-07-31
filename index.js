// local variables
let introPosition = -1;


// function to toggle navigation

const toggleNav = () => {
    nav = document.getElementById("mobileNav");

    if (nav.style.display == "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}

// function to change the intro
const changeIntro = () => {
    introPosition++;

    if (introPosition >= 4) {
        introPosition = 0;
    }

    switch(introPosition) {
        case 0:
            document.getElementById("intro1").style.display = "flex";
            document.getElementById("intro2").style.display = "none";
            document.getElementById("intro3").style.display = "none";
            document.getElementById("intro4").style.display = "none";
            break;
        case 1:
            document.getElementById("intro1").style.display = "none";
            document.getElementById("intro2").style.display = "flex";
            document.getElementById("intro3").style.display = "none";
            document.getElementById("intro4").style.display = "none";
            break;
        case 2:
            document.getElementById("intro1").style.display = "none";
            document.getElementById("intro2").style.display = "none";
            document.getElementById("intro3").style.display = "flex";
            document.getElementById("intro4").style.display = "none";
            break;
        case 3:
            document.getElementById("intro1").style.display = "none";
            document.getElementById("intro2").style.display = "none";
            document.getElementById("intro3").style.display = "none";
            document.getElementById("intro4").style.display = "flex";
            break;
        default:
            document.getElementById("intro1").style.display = "flex";
            document.getElementById("intro2").style.display = "none";
            document.getElementById("intro3").style.display = "none";
            document.getElementById("intro4").style.display = "none";
        }
}

changeIntro();
// set interval and change staff
setInterval(() => {
    changeIntro();
}, 6000);