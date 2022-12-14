function getMediaLighbox() {
    // debugger
    const WorksElements = document.querySelectorAll(".userMedia>.thumb-imgfull");

    // Convert nodelist to array, call calls nodelist as 'this' in method and array.prototype defines type of 'this'
    return Array.prototype.slice.call(WorksElements);
}

function lightbox(event) {

    // use param to target actual media who our mousse are 
    const target = event.currentTarget;

    const Work = target.parentNode;
    // select our lightbox
    const lightbox = document.querySelector(".lightbox");
    // get data from our early function
    const userWork = getMediaLighbox();
    // return index 
    const indexMedia = userWork.indexOf(Work);
    // let indexMedia = userWork.indexOf(Work);
    lightbox.dataset.key = indexMedia;

    // load function
    tabindexSet(-1)
    loadLightbox();

    // toggle the class active
    lightbox.classList.toggle('lightbox-active');
}


function getMediaLighbox() {
    // debugger
    const WorksElements = document.querySelectorAll(".userMedia>.thumb-imgfull");

    // Convert nodelist to array, call calls nodelist as 'this' in method and array.prototype defines type of 'this'
    return Array.prototype.slice.call(WorksElements);
}

function lightbox(event) {

    // use param to target actual media who our mousse are 
    const target = event.currentTarget;

    const Work = target.parentNode;
    // select our lightbox
    const lightbox = document.querySelector(".lightbox");
    // get data from our early function
    const userWork = getMediaLighbox();
    // return index 
    const indexMedia = userWork.indexOf(Work);
    // let indexMedia = userWork.indexOf(Work);
    lightbox.dataset.key = indexMedia;

    // load function
    tabindexSet(-1)
    loadLightbox();

    // toggle the class active
    lightbox.classList.toggle('lightbox-active');

    IsLightboxKeyListenerActive = true;

}

function loadLightbox() {

    // select our lightbox
    const lightbox = document.querySelector(".lightbox");
    // select our paragrpaher empty 
    const lightboxTtile = lightbox.querySelector("p");
    // get data from our early function
    const works = getMediaLighbox();
    // select current media and title
    const currentMediaKey = lightbox.dataset.key;
    const currentMediaTitle = works[currentMediaKey].querySelector("p").textContent;
    let currentMedia = works[currentMediaKey].querySelector(".thumb-img");
    if (currentMedia) {
        currentMedia = currentMedia.cloneNode(true);
    } else {
        currentMedia = works[currentMediaKey].querySelector(".thumb-vdieo").cloneNode(true);
    }
    currentMedia.setAttribute("tabindex", "4");
    // currentMedia.setAttribute("aria-haspopup");

    // to insert media before title 
    lightbox.insertBefore(currentMedia, lightboxTtile);
    lightbox.querySelector(".thumb-img").removeAttribute("onclick");
    lightboxTtile.textContent = currentMediaTitle;
}

function control(event) {

    // The switch statement evaluates an expression. 
    // The value of the expression is then compared with the values of each case in the structure. 
    // If there is a match, the associated block of code is executed. 
    switch (event.currentTarget.className) {
        case "next":
            nextMedia();
            break;
        case "previous":
            previousMedia();
            break;
        case "close":
            closeMedia();
            break;
    }
}

function nextMedia() {

    // select lightbox
    const lightbox = document.querySelector(".lightbox");
    // select the arrow
    let controlKey = parseInt(lightbox.dataset.key);
    // get data from our early function
    const medias = getMediaLighbox();

    // go next media by adding 1
    controlKey = (controlKey + 1) % medias.length;
    lightbox.dataset.key = controlKey;
    loadLightbox();
}

function previousMedia() {

    // select lightbox
    const lightbox = document.querySelector(".lightbox");
    // select the arrow
    let controlKey = parseInt(lightbox.dataset.key);

    const medias = getMediaLighbox();
    controlKey = (controlKey + (medias.length) - 1) % medias.length;
    lightbox.dataset.key = controlKey;
    loadLightbox();
}

function closeMedia() {

    // select lightbox
    const lightbox = document.querySelector(".lightbox");
    // select the close 
    const controlKey = parseInt(lightbox.dataset.key);

    // toggle the class active
    lightbox.classList.toggle('lightbox-active');
    document.querySelectorAll(".thumb-img")[controlKey].focus();
    tabindexSet(0)
}

// to add event listener 
let IsLightboxKeyListenerActive = false;
document.addEventListener('keydown',
    function (event) {
        IsLightboxKeyListenerActive ? handleLightboxKeyDown(event) : undefined;
    }
);

// for bind the key 
function handleLightboxKeyDown(event) {
    switch (event.key) {
        case "ArrowLeft":
            previousMedia()
            break;
        case "ArrowRight":
            nextMedia()
            break;
        case "Escape":
            closeMedia();
            break;
    }
}