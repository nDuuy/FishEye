function photographerFactory(data) {

	// link to data.json
	const {
		portrait, name, city, country, tagline, price, id
	} = data;

	// link to data.json and photographer pic
	const picture = `assets/photographers/ID_Photo/${portrait}`;

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

		// create h1 for name 
		const h1Name = document.createElement('h1');
		h1Name.textContent = name;

		// create and link p for city and country 
		const location = document.createElement('p');
		location.textContent = `${city}, ${country}`;

		// create and link p for tagline
		const Tagline = document.createElement('p');
		Tagline.textContent = tagline;

		// to create the elements
		UserProfil.appendChild(h1Name);
		UserProfil.appendChild(location);
		UserProfil.appendChild(Tagline);

		// for return our Div 
		return (UserProfil);
	}

	// return our function
	return {
		getUserCardDOM, getProfilDom
	};

}