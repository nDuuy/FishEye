function keyboardNav(event) {

    // for choose what key use 
    switch (event.key) {

        case "Enter":
            return true;
            break;
        case " ":
            event.preventDefault();
            return true;
            break;
        default:
            return false;
            break;

    }
}

function openlink(event) {

    // to prevent default comportement  
    if (event.key === " ") {

        event.preventDefault();
        window.open(event.currentTarget.href, '_self');

    }
}