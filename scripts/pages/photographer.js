async function getData() {

	// fetch for search data 
	return fetch('data/Data.json')

		// for convert data 
		.then(responce => responce.json());
}



// show information of photographer 
async function displayUserData(photographer) {

	// debugger

	// for connect to html element
	const UserHeader = document.querySelector(".photograph-header");
	// to connect to our factory function 
	const photographerInfo = photographerFactory(photographer);
	// to get our User data function
	const UserProfile = photographerInfo.getProfilDom();
	// connect to html 
	const UserPrice = document.querySelector(".pricePerDay");
	// use factory function to find price we feth early
	const pricePerDay = document.createTextNode(photographerInfo.price);

	// create element
	UserHeader.appendChild(UserProfile);

	// for insert price in html before
	UserPrice.insertBefore(pricePerDay, UserPrice.firstChild);


	const UserMedias = document.querySelector(".userMedia");

	const UserPicVid = photographerInfo.getMediasCards();

	UserMedias.appendChild(UserPicVid)


}

// async function displayWorkData(DataMedia) {

// 	// debugger



// 	// const UserWorkSection = document.querySelector(".userMedia")

// 	const Works = DataMedia.filter(Media => Media.PhotographerID == getUserId())

// 	Works.forEach((media) => {
// 		const photographerWork = WorkFactory(media);
// 		const UserWorkDom = photographerWork.getMediasCards();
// 		UserWorkSection.appendChild(UserWorkDom);
// 	})
// }

// get id of photographer 
function getUserId() {

	// use 
	const urlSearchParams = new URLSearchParams(window.location.search);
	const params = Object.fromEntries(urlSearchParams.entries());
	return params.photographer;
}



async function init() {

	// get data of photographer before load the other function 
	const { photographers, media } = await getData();

	// find photographer by params of the page 
	const photographer = photographers.find(photographe => photographe.id == getUserId());

	// for add contact me and name of each photographer 
	document.querySelector(".NameOfPhotographer").textContent = `Conctater-moi ${photographer.name}`;

	// for display data 
	displayUserData(photographer);
	// displayWorkData(media);

}

init();


