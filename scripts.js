let bars = document.getElementById("bars")
let menulist = document.getElementById("menulist")
let bookBtn = document.getElementById("book-btn")
let checkAvailabilty = document.getElementById("checkAvailabilty")
let allLinks = document.querySelectorAll("li a")


bars.onclick = () => {
    if (menulist.style.display == "block") {

        menulist.style.display = "none"
    } else
        menulist.style.display = "block"
}
bookBtn.onclick = (e) => {
    e.preventDefault();
    document.querySelector("#book").scrollIntoView();
    menulist.style.display = "none"

}
checkAvailabilty.onclick = (e) => {
    e.preventDefault();
}
allLinks.forEach(link => {
    link.onclick = () => {
        menulist.style.display = "none"
    }
})