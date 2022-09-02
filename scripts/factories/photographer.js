// function photographerFactory(data) {
//     const { name, portrait, city, country, tagline, price } = data;

//     const picture = `./assets/photographers/ID_Photos${portrait}`;

//     function getUserCardDOM(data) {
//         const article = document.createElement( 'article' );
//         const img = document.createElement( 'img' );
//         img.setAttribute("src", picture);
//         const h2Name = document.createElement( 'h2' );
//         const h3City = document.createElement('h3');
//         const h3Country = document.createElement('h3');
//         const pTagline = document.createElement('p');
//         const pPrice =document.createElement('p');

//         h2Name.textContent = name;
//         h3City.textContent = city;
//         h3Country.textContent = country;
//         pTagline.textContent = tagline;
//         pPrice.textContent = price;




//         article.appendChild(img);
//         article.appendChild(h2);
//         article.appendChild(h3);
//         article.appendChild(h3);
//         article.appendChild(p);
//         article.appendChild(p);
//         return (article);
//     }
//     return { name, picture, country, city, price, tagline, getUserCardDOM }
// }

