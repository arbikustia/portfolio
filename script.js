let aboutImg = document.getElementById("about-img")
let aboutDesc = document.getElementById("about-desc")
window.addEventListener('scroll', function () {
    let scrol = this.window.scrollY;
    if (scrol > 300) {
        aboutImg.classList.add('aboutImg')
        aboutDesc.classList.add('aboutDesc')
    }
})


let interestsWrap = document.getElementById("interests-wrap")
window.addEventListener('scroll', function () {
    let scrol = this.window.scrollY;
    if (scrol > 2900) {
        interestsWrap.classList.add('interestsWrap')
    }
})
