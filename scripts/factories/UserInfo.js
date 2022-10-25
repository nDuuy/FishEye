function photographerFactory(data) {
	// debugger
	// link to data.json
	const {
		portrait, name, city, country, tagline, price, id, title, image, video, likes, date
	} = data;
	const picture = `assets/images/${image}`;
	const videoData = `assets/images/${video}`;

	// link to data.json and photographer pic
	const pictureId = `assets/photographers/ID_Photo/${portrait}`;


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
		img.setAttribute("src", pictureId);
		img.setAttribute("alt", name);
		img.className = 'user-id';

		// create and link h2 for name 
		const h2Name = document.createElement('h2');
		h2Name.textContent = name;

		// create and link p for city and country 
		const location = document.createElement('p');
		location.textContent = `${city}, ${country}`;
		location.className = "city-country";

		// create and link p for tagline
		const Tagline = document.createElement('p');
		Tagline.textContent = tagline;

		// create and link p for price 
		const Price = document.createElement('p');
		Price.textContent = `${price}€/jour`;
		Price.className = "priceHome";

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
		userInfo.className = 'info';

		// create h1 for name 
		const h1Name = document.createElement('h1');
		h1Name.textContent = name;

		// create and link p for city and country 
		const location = document.createElement('p');
		location.textContent = `${city}, ${country}`;
		location.className = 'location-info';

		// create and link p for tagline
		const Tagline = document.createElement('p');
		Tagline.textContent = tagline;

		// div for user img and contact btn
		const imgDiv = document.createElement('div');
		imgDiv.className = 'Btn-Img';

		// create btn contact and ad onClick function 
		const btnContact = document.createElement('button');
		btnContact.innerHTML = "Contactez-moi";
		btnContact.className = "contact_button";
		btnContact.setAttribute("alt", "Contact Me");
		// btnContact.setAttribute("tabindex", 0)
		btnContact.addEventListener('click', function displayModal() {
			const modal = document.getElementById("contact_modal");
			modal.style.display = "block";
			tabindexSet(-1);
		});

		// img of user
		const img = document.createElement('img');
		img.setAttribute("src", pictureId);
		img.setAttribute("alt", name);
		img.className = 'Id-img';

		// to create the elements on userprofile div
		UserProfil.appendChild(userInfo);
		UserProfil.appendChild(imgDiv);

		// to create the elements on imgdiv
		imgDiv.appendChild(img);
		imgDiv.appendChild(btnContact);

		// to create elements on di userInfo
		userInfo.appendChild(h1Name);
		userInfo.appendChild(location);
		userInfo.appendChild(Tagline);

		// for return our Div 
		return (UserProfil);
	}


	function getUserWorkDOM() {

		// create div 
		const PictureDivs = document.createElement('div');
		PictureDivs.className = 'thumb-imgfull';

		// variable for media
		var PicVideo = getMedia();


		// div who contain title and like
		const EverythingDiv = document.createElement('div');
		EverythingDiv.className = "EverythingDiv";

		// title of media
		const PictureTitle = document.createElement('p');
		PictureTitle.textContent = title;
		PictureTitle.className = "titleMediaName";

		// Div like 
		const likeOfMedia = document.createElement('div');
		likeOfMedia.className = "likeOfMedia";

		// div for number 
		const numberOfLike = document.createElement('div');
		numberOfLike.textContent = likes;
		numberOfLike.className = "number";

		// div for like btn and heart icon 
		const LikeAndIcon = document.createElement('div');
		LikeAndIcon.addEventListener('click', function likeAdd1(e) {

			// use param to target actual media who our mousse are 
			const target = e.currentTarget;

			// select section to incremant 
			target.querySelector(".number").textContent = parseInt(target.textContent) + 1;

			// update total like
			totalLike();
		});
		LikeAndIcon.setAttribute("role", "button");
		LikeAndIcon.ariaLabel = "LikeAndIcon";
		LikeAndIcon.className = "LikeAndIcon";

		// img
		const icon = document.createElement('img');
		icon.src = 'assets/icons/heart.svg';
		icon.setAttribute("alt", likes);
		icon.className = "iconSvg";

		// create ellements on div pictureDivs
		PictureDivs.appendChild(EverythingDiv);
		PictureDivs.appendChild(PicVideo);

		// create ellements on EverythingDiv
		EverythingDiv.appendChild(PictureTitle);
		EverythingDiv.appendChild(likeOfMedia);

		// create ellements on div likeOfMedia
		// likeOfMedia.appendChild(numberOfLike);
		likeOfMedia.appendChild(LikeAndIcon);

		// create ellements on div 
		LikeAndIcon.appendChild(icon);
		LikeAndIcon.appendChild(numberOfLike);

		return (PictureDivs);
	}

	function getMedia() {

		// debugger

		var userMedia = null;

		if (image != null) {
			userMedia = document.createElement('img');
			userMedia.setAttribute("src", picture);
			userMedia.setAttribute("alt", title);
			userMedia.classList.add("thumb-img");
			userMedia.setAttribute("onkeydown", "keyboardNav(event)?lightbox(event):undefined")
		} else if (video != null) {
			userMedia = document.createElement('video');
			userMedia.setAttribute("src", videoData);
			userMedia.setAttribute("alt", title);
			userMedia.controls = true;
			userMedia.classList.add("thumb-img");
		}

		userMedia.setAttribute("onclick", "lightbox(event)");
		userMedia.setAttribute("tabindex", 0);
		userMedia.setAttribute("aria-haspopup", "dialog");
		userMedia.setAttribute("aria-label", title)
		userMedia.dataset.date = date
		return (userMedia);
	}

	// return our function
	return {
		getUserCardDOM, getProfilDom, price, getUserWorkDOM
	};
}