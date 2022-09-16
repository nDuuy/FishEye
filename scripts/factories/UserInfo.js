function photographerFactory(data) {
	// debugger
	// link to data.json
	const {
		portrait, name, city, country, tagline, price, id, title, image, video
	} = data;

	// link to data.json and photographer pic
	const pictures = `assets/images/${image}`;
	const picture = `assets/photographers/ID_Photo/${portrait}`;
	const vids = `assets/images/${video}`;


	function getUserCardDOM() {

		// create article for each photographer 
		const article = document.createElement('article');
		article.className = 'thumb';

		// create a href to link photographer page with is ID 
		const LinkToUser = document.createElement('a');
		LinkToUser.href = `photographer.html?photographer=${id}`;
		LinkToUser.ariaLabel = name;

		// create and link and html atribute img to photographer 
		const img = document.createElement('img');
		img.setAttribute("src", picture);
		img.setAttribute("alt", name);
		img.className = 'user-id';

		// create and link h2 for name 
		const h2Name = document.createElement('h2');
		h2Name.textContent = name;

		// create and link p for city and country 
		const location = document.createElement('p');
		location.textContent = `${city}, ${country}`;
		location.className = "city-country"

		// create and link p for tagline
		const Tagline = document.createElement('p');
		Tagline.textContent = tagline;

		// create and link p for price 
		const Price = document.createElement('p');
		Price.textContent = `${price}€/jour`;

		// to create the elements
		article.appendChild(LinkToUser);
		article.appendChild(location);
		article.appendChild(Tagline);
		article.appendChild(Price);

		// to add href link to elements
		LinkToUser.appendChild(img);
		LinkToUser.appendChild(h2Name);

		// for return our article 
		return (article);
	}


	function getProfilDom() {

		// create Div for each photographer
		const UserProfil = document.createElement('div');
		UserProfil.className = 'Photographer-Profile';

		// create div for name and tagline user 
		const userInfo = document.createElement('div');
		userInfo.className = 'info'

		// create h1 for name 
		const h1Name = document.createElement('h1');
		h1Name.textContent = name;

		// create and link p for city and country 
		const location = document.createElement('p');
		location.textContent = `${city}, ${country}`;
		location.className = 'location-info'

		// create and link p for tagline
		const Tagline = document.createElement('p');
		Tagline.textContent = tagline;

		// div for user img and contact btn
		const imgDiv = document.createElement('div')
		imgDiv.className = 'Btn-Img'

		// create btn contact and ad onClick function 
		const btnContact = document.createElement('button')
		btnContact.innerHTML = "Contactez-moi"
		btnContact.className = "contact_button"
		btnContact.addEventListener('click', function displayModal() {
			const modal = document.getElementById("contact_modal");
			modal.style.display = "block";
		});

		// img of user
		const img = document.createElement('img');
		img.setAttribute("src", picture);
		img.setAttribute("alt", name);
		img.className = 'Id-img';

		// to create the elements on userprofile div
		UserProfil.appendChild(userInfo)
		UserProfil.appendChild(imgDiv)

		// to create the elements on imgdiv
		imgDiv.appendChild(img);
		imgDiv.appendChild(btnContact)

		// to create elements on di userInfo
		userInfo.appendChild(h1Name);
		userInfo.appendChild(location);
		userInfo.appendChild(Tagline);

		// for return our Div 
		return (UserProfil);
	}

	function getMediasCards() {
		let container = document.createElement("div");
		container.setAttribute("class", "cardSize");

		//crée le titre
		const pictureTitle = document.createElement("p").textContent = title

		//crée l'élement pictureLegend titre
		let legendContainer = document.createElement("div");

		// crée element container de tout
		legendContainer.setAttribute("class", "underpicture");

		// legendContainer.append(pictureTitle);
		legendContainer.append(pictureTitle)

		if (image) {
			let newImage = document.createElement("img");
			newImage.setAttribute("src", pictures);
			newImage.setAttribute("class", "picturesSize");
			newImage.style = "cursor:pointer";
			container.append(legendContainer, newImage);

		} else if (video) {
			let newVideo = document.createElement("video");
			newVideo.setAttribute("src", vids);
			newVideo.setAttribute("class", "controls");
			newVideo.controls = true;
			container.append(legendContainer, newVideo);
		}
		return (container);
	}


	// return our function
	return {
		getUserCardDOM, getProfilDom, price, getMediasCards
	};

}