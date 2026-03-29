function Blur(element) {
    element.style.filter = "blur(0)";
}

function Scroll(page) {
    window.scrollTo({top: window.innerHeight * page, behavior: "smooth"})
}