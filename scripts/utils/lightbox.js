function getMediaLighbox() {
    // debugger
    const WorksElements = document.querySelectorAll(".userMedia>.thumb-imgfull");
    return Array.prototype.slice.call(WorksElements)
}

function lightbox(event) {
    const target = event.currentTarget;
    const Work = target.parentNode;
    const lightbox = document.querySelector(".lightbox");
    const userWork = getMediaLighbox();
    const indexMedia = userWork.indexOf(Work);


    lightbox.dataset.key = indexMedia;

    loadLightbox();

    lightbox.classList.toggle('lightbox-active')

}

function loadLightbox() {
    const lightbox = document.querySelector(".lightbox");
    const lightboxTtile = lightbox.querySelector("p");
    const works = getMediaLighbox();
    const currentMediaKey = lightbox.dataset.key;
    const currentMediaTitle = works[currentMediaKey].querySelector("p").textContent;
    const currentMedia = works[currentMediaKey].querySelector(".thumb-img").cloneNode(true);

    lightbox.insertBefore(currentMedia, lightboxTtile);

    lightboxTtile.textContent = currentMediaTitle


}

// function close() {
//     const closebtn = document.querySelector(".close")

//     closebtn.classList.add('active')
// }