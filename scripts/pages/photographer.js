async function getData() {

	// fetch for search data 
	return fetch('data/Data.json')

	// for convert data 
	.then(responce => responce.json());
}

// show information of photographer 
async function displayUserData(photographer) {
	
	const UserHeader = document.querySelector(".photograph-header");
	const photographerInfo = photographerFactory(photographer);
	const UserProfile = photographerInfo.getProfilDom();

    // for insert user profil in html before contact button 
	UserHeader.insertBefore(UserProfile, UserHeader.firstChild);

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