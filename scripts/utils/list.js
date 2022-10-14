function dropdown(event) {

    // to target actual option 
    const button = event.currentTarget;
    const dropdown = button.parentNode;

    // for add class to html elements
    dropdown.classList.toggle('dropdown-open');
    if (dropdown.classList.contains('dropdown-open')) {
        button.setAttribute('aria-expanded', true);
    } else {
        button.setAttribute('aria-expanded', false);
    }
}

function selectOption(event) {
    // debugger

    // to get option chose by user
    const target = event.currentTarget;
    const option = target.dataset.value;
    const dropdownList = target.parentNode;
    const dropdown = target.parentNode.parentNode;
    const button = dropdown.querySelector("button");

    // for add or remove atribute to selected option 
    const currentDropdown = dropdown.querySelectorAll(".dropdown-hide");
    for (let i = 0; i < currentDropdown.length; i++) {
        currentDropdown[i].classList.remove("dropdown-hide");
        currentDropdown[i].setAttribute("aria-selected", "false");
    }
    target.classList.add("dropdown-hide");
    target.setAttribute("aria-selected", "true");

    dropdown.dataset.value = option;
    dropdown.querySelector('button').textContent = dropdown.querySelector(`[data-value=${option}]`).textContent;

    dropdown.classList.toggle('dropdown-open');
    if (dropdown.classList.contains('dropdown-open')) {
        button.setAttribute('aria-expanded', true);
    } else {
        button.setAttribute('aria-expanded', false);
    }
    dropdownList.setAttribute("aria-activedescendant", target.id);

    // function for filtre the media by selected option early 
    orderWork();
}

