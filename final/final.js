document.querySelector(".navbar").classList.add("fadebar");
document.querySelector(".connections").classList.add("fadebar");
window.addEventListener("scroll", () => {
    const element = document.querySelector(".navbar");
    const element2 = document.querySelector(".connections");
    const scrollY = window.scrollY;

    if (scrollY > 90) {
        element.classList.remove("fadebar");
        element2.classList.remove("fadebar");
    } else {
        element.classList.add("fadebar");
        element2.classList.add("fadebar");
    }
});