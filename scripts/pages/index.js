async function getPhotographers() {

    // fetch for search data 
    return fetch('data/Data.json')

        // for convert data
        .then(response => response.json());
}

async function displayData(photographers) {

    // connect to html
    const photographersSection = document.querySelector(".photographer_section");

    // use parameter and create new arrow function with parameter photographer
    photographers.forEach((photographer) => {

        // connect to factory function 
        const photographerModel = photographerFactory(photographer);

        // display photographer card 
        const userCardDOM = photographerModel.getUserCardDOM();

        // crate this element
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
