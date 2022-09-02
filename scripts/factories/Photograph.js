class Photograph {
	constructor(photographJson) {
		photographJson && Object.assign(this, photographJson);
	}

	displayList() {
		return `<div class="photographer-profile">
        <a href="/photographer.html" id="${this.id}"> 
          <section class="photographIndexDetail">
            <img src="./assets/photographers/ID_Photos/${this.portrait}" id="${this.name}" alt="${this.name}">
            <h2>${this.name}</h2>
            <h4>${this.city}, ${this.country}</h4>
            <blockquote>${this.tagline}</blockquote>
          </section>
        </a>
        <span class="prix">${this.price}€/jour</span>
       </div>`;
	}

}