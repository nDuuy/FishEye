async function getData() {

	// fetch for search data 
	return fetch('data/Data.json')

	// for convert data 
	.then(responce => responce.json());
}

// show information of photographer 
async function displayUserData(photographer) {
	
	// for connect to html element
	const UserHeader = document.querySelector(".photograph-header");
	// to connect to our factory function 
	const photographerInfo = photographerFactory(photographer);
	// to get our User data function
	const UserProfile = photographerInfo.getProfilDom();

	const UserPrice = document.querySelector(".pricePerDay")
	const pricePerDay = document.createTextNode(UserHeader.price)

    // for insert user profil in html before contact button 
	UserHeader.insertBefore(UserProfile, UserHeader.firstChild);

	// for insert price in html before
	UserPrice.insertBefore(pricePerDay, UserPrice.firstChild)

}

// get id of photographer 
function getUserId() {
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	return params.photographer;
}

async function init() {

	// get data of photographer before load the other function 
	const { photographers } = await getData();

	// find photographer by params of the page 
	const photographer = photographers.find(photographe => photographe.id == getUserId());
	
    // for display data 
	displayUserData(photographer);
}

init();


