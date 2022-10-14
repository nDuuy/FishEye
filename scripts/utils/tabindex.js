function tabindexSet(value) {

    // add or remove overflow to html tag selected 
    let body = document.querySelector("body");
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const tabs = [...main.querySelectorAll("[tabindex]"), ...header.querySelectorAll("[tabindex]")];

    if (body.style.overflow === 'hidden') {
        body.style.overflow = 'unset'
    } else {
        body.style.overflow = 'hidden';
    }

    // for tabindex by their value 
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute("tabindex", `${value}`);
    }
}