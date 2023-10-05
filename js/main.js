
let navLink = document.querySelectorAll(".nav-links")
let h1Header = document.getElementById("header")
let btnUp=document.getElementById("btns");
let btnBars = document.getElementById("btn-bars");
let icons = document.getElementById("ico")
let sOffset = document.getElementById("scroll");

let navBg = document.getElementById("bg-color")
btnBars.addEventListener("click", function () {
    icons.style.right = "0";
})

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function () {
        icons.style.right = "-100%";
    })
}

document.addEventListener('scroll', function () {
    let i = sOffset.offsetHeight
    let t = scrollY;
    if (t > i) {
        navBg.style.backgroundColor = "#000"
        h1Header.style.opacity = "1"
        btnUp.style.opacity='1'
    }
    else {
        navBg.style.backgroundColor = "transparent"
        h1Header.style.opacity = "0"
        btnUp.style.opacity='0'
    }
})

btnUp.addEventListener("click",function(){
    
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;

})
