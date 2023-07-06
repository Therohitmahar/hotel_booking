let bars = document.getElementById("bars")
let menulist = document.getElementById("menulist")
let bookBtn = document.getElementById("book-btn")
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