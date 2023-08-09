
let bars = document.getElementById("bars")

let menulist = document.getElementById("menulist")
let bookBtn = document.getElementById("book-btn")
let checkAvailabilty = document.getElementById("checkAvailabilty")
let allLinks = document.querySelectorAll("li a")
let aboutSpan = document.getElementById("aboutSpan")
let aboutBtn = document.getElementById("aboutBtn")


bars.onclick = () => {
    if (menulist.style.display == "block") {

        menulist.style.display = "none"
    } else
        menulist.style.display = "block"
}

bookBtn.onclick = (e) => {
    e.preventDefault();
    document.querySelector("#book").scrollIntoView();
}
checkAvailabilty.onclick = (e) => {
    e.preventDefault();
}
let x = window.matchMedia("screen and (max-width:768px)");
allLinks.forEach(link => {

    link.onclick = () => {
        if (x.matches) {
            console.log(x.matches);
            menulist.style.display = "none";
        }
    }
});

aboutBtn.onclick = () => {

    if (aboutSpan.style.display == "block") {

        aboutSpan.style.display = "none"
    } else
        aboutSpan.style.display = "block"
}

