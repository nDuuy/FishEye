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

function orderWork() {
	const photographWork = document.querySelector(".userMedia");
	let contentNodes = document.querySelectorAll('.thumb-imgfull');
	const order = document.querySelector(".dropdown").dataset.value;
	// Converti la nodelist en array, le call appelle la nodelist en tant que 'this' dans la méthode et array.prototype défini le type de 'this'
	let content = Array.prototype.slice.call(contentNodes);

	switch (order) {
		case "popularity":
			// De + à -
			content.sort(
				function (item, nextItem) {
					let firstNumber = parseInt(item.querySelector(".number").textContent);
					let secondNumber = parseInt(nextItem.querySelector(".number").textContent);
					return secondNumber - firstNumber;
				}
			)
			break;
		case "date":
			// De + à -
			content.sort(
				function (item, nextItem) {
					let firstString = item.querySelector("[data-date]").dataset.date;
					let secondString = nextItem.querySelector("[data-date]").dataset.date;
					return secondString.localeCompare(firstString);
				}
			)
			break;
		case "title":
			// De A à B
			content.sort(
				function (item, nextItem) {
					let firstString = item.querySelector(".thumb-imgfull>:nth-child(2)").textContent.toLowerCase();
					let secondString = nextItem.querySelector(".thumb-imgfull>:nth-child(2)").textContent.toLowerCase();
					return firstString.localeCompare(secondString);
				}
			)
			break;
		default:
			break;
	}

	photographWork.innerHTML = "";
	content.forEach(item => photographWork.appendChild(item));
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
	orderWork();
}

init();


