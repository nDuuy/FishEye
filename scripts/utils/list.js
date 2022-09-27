function dropdown(event) {
    const button = event.currentTarget;
    const dropdown = button.parentNode;
    dropdown.classList.toggle('dropdown-open');
    if (dropdown.classList.contains('dropdown-open')) {
        button.setAttribute('aria-expanded', true);
    } else {
        button.setAttribute('aria-expanded', false);
    }

    setTimeout(() => button.focus(), 50);
}

function selectOption(event) {
    // debugger
    const target = event.currentTarget;
    const option = target.dataset.value;
    const dropdownList = target.parentNode;
    const dropdown = target.parentNode.parentNode;
    const button = dropdown.querySelector("button");

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

    orderWork();
    setTimeout(() => dropdown.querySelector('button').focus(), 50);

}

