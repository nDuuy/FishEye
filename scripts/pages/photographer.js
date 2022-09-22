async function getData() {

	// fetch for search data 
	return fetch('data/Data.json')

		// for convert data 
		.then(responce => responce.json());
}


// show information of photographer 
async function displayUserData(photographer, DataMedia) {

	// debugger

	// header section

	// for connect to html element
	const UserHeader = document.querySelector(".photograph-header");
	// to connect to our factory function 
	const photographerInfo = photographerFactory(photographer);
	// to get our User data function
	const UserProfile = photographerInfo.getProfilDom();
	// create element
	UserHeader.appendChild(UserProfile);

	//price div section

	// connect to html 
	const UserPrice = document.querySelector(".pricePerDay");
	// use factory function to find price we feth early
	const pricePerDay = document.createTextNode(photographerInfo.price);
	// for insert price in html before
	UserPrice.insertBefore(pricePerDay, UserPrice.firstChild);

	// media display section 

	// to connect to html
	const UserWorkSection = document.querySelector(".userMedia")
	// use filter to find photographer by this id
	const Works = DataMedia.filter(Media => Media.photographerId == getUserId())
	// to connect to factory function and diplay it
	Works.forEach((media) => {
		const photographerWork = photographerFactory(media);
		const UserWorkDom = photographerWork.getUserWorkDOM();
		UserWorkSection.appendChild(UserWorkDom);
	})
}

async function totalLike() {
	// debugger
	const PicVid = document.querySelector(".userMedia");
	const likes = PicVid.querySelectorAll(".number");
	const totalCount = document.querySelector(".like");

	let count = 0;
	likes.forEach(like => count += parseInt(like.textContent))

	totalCount.textContent = count
}

// get id of photographer 
function getUserId() {
	// debugger

	// get id of user in url+
	const urlSearchParams = new URLSearchParams(window.location.search);
	// return id 
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
	displayUserData(photographer, media);
	totalLike();
}

init();


