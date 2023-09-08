// global references to the categories in the navbar
const electronics = document.getElementById('Electronics');
const jewelry = document.getElementById('Jewelry');
const menClothing = document.getElementById("Men's Clothing");
const womenClothing = document.getElementById("Women's Clothing");
const cardBase = document.getElementById('cardBase');
const title = document.getElementsByClassName('card-title');

// global reference to the display
const display = document.getElementById('display');

// global reference to the API that will be used
const API = "https://fakestoreapi.com/";

// global reference to the cart
const cart = [];

// the four categories in the navbar are assigned their event listeners
electronics.onclick = function() {
	console.log(fakeStore("products/category/electronics"))
};

jewelry.onclick = function() {
	console.log(fakeStore("products/category/jewelery"))
};

menClothing.onclick = function() {
	console.log(fakeStore("products/category/men's clothing"))
};

womenClothing.onclick = function() {
	console.log(fakeStore("products/category/women's clothing"))
};

//returns the promise with information
const fakeStore = async (endpoint) => {
	let result = await fetch(API + endpoint);
	let data = await result.json();
	displayCards(data);
	return data;
};

// displays the products returned as cards
const displayCards = (data) => {
	console.log("displayed cards");
	// create the element
	// change the element
	// add the element
	display.innerHTML = '';
	let cards = [];
	// creates the elements of the cards
	data.forEach(product => {
		cards.push({
			product: product,
			body: document.createElement('div'),
			image: document.createElement('img'),
			title: document.createElement('div'),
			accordion: document.createElement('div'),
			descriptionItem: document.createElement('div'),
			descriptionHeader: document.createElement('h2'),
			descriptionButton: document.createElement('button'),
			descriptionCollapse: document.createElement('div'),
			descriptionBody: document.createElement('div'),
			priceItem: document.createElement('div'),
			priceHeader: document.createElement('h2'),
			priceButton: document.createElement('button'),
			priceCollapse: document.createElement('div'),
			priceBody: document.createElement('div'),
			addButton: document.createElement('button')
		});
		// let newCard = document.createElement('div');
		// newCard.className = 'card';
		// newCard.style = 'width: 18rem;';
		// newCard.innerHTML = title.innerHTML;
	});
	
	// edits and appends the parts of the cards
	cards.forEach((card, index) => {
		card.body.className = 'card w-25 h-50';
		card.body.style = 'width: 18rem;';
		card.image.className = 'card-img-top w-25 h-25 align-self-center';
		card.image.src = `${card.product.image}`;
		card.image.alt = `${card.product.title}`;
		card.title.innerText = `${card.product.title}`;
		card.title.className = 'card-title';
		card.accordion.className = 'accordion';
		card.accordion.id = 'accordionExample';
		card.descriptionItem.className = 'accordion-item';
		card.descriptionHeader.className = 'accordion-header ';
		card.descriptionHeader.id = `heading${index}`;
		card.descriptionButton.className = 'accordion-button';
		card.descriptionButton.innerText = 'Description';
		card.descriptionButton.type = 'button';
		card.descriptionButton.setAttribute('data-bs-toggle', 'collapse');
		card.descriptionButton.setAttribute('data-bs-target', `#collapse${index}`);
		card.descriptionButton.setAttribute('aria-expanded', 'false');
		card.descriptionButton.setAttribute('aria-controls', `collapse${index}`);
		card.descriptionCollapse.className = 'accordion-collapse collapse';
		card.descriptionCollapse.id = `collapse${index}`;
		card.descriptionCollapse.setAttribute('aria-labelledby', `heading${index}`);
		card.descriptionCollapse.setAttribute('data-bs-parent', '#accordonExample');
		card.descriptionBody.className = 'accordion-body';
		card.descriptionBody.innerText = `${card.product.description}`;
		card.priceItem.className = 'accordion-item';
		card.priceHeader.className = 'accordion-header';
		card.priceHeader.id = `heading${index}2`;
		card.priceButton.className = 'accordion-button';
		card.priceButton.innerText = 'Price';
		card.priceButton.type = 'button';
		card.priceButton.setAttribute('data-bs-toggle', 'collapse');
		card.priceButton.setAttribute('data-bs-target', `#collapse${index}2`);
		card.priceButton.setAttribute('aria-expanded', 'false');
		card.priceButton.setAttribute('aria-controls', `collapse${index}2`);
		card.priceCollapse.className = 'accordion-collapse collapse';
		card.priceCollapse.id = `collapse${index}2`;
		card.priceCollapse.setAttribute('aria-labelledby', `heading${index}2`);
		card.priceCollapse.setAttribute('data-bs-parent', 'accordionExample');
		card.priceBody.className = 'accordion-body';
		card.priceBody.innerText = `$${card.product.price}`;

		card.addButton.innerText = 'Add to Cart';
		card.addButton.onclick = () => {
			let item = {
				id: card.product.id,
				title: card.product.title,
				cost: card.product.price,
				quantity: 1
			}
			submitToCart(item);
		};

		card.body.append(card.image);
		card.body.append(card.title);
		card.body.append(card.accordion);
		card.accordion.append(card.descriptionItem);
		card.descriptionItem.append(card.descriptionHeader);
		card.descriptionHeader.append(card.descriptionButton);
		card.accordion.append(card.descriptionCollapse);
		card.descriptionCollapse.append(card.descriptionBody);
		//
		card.accordion.append(card.priceItem);
		card.priceItem.append(card.priceHeader);
		card.priceHeader.append(card.priceButton);
		card.accordion.append(card.priceCollapse);
		card.priceCollapse.append(card.priceBody);

		card.body.append(card.addButton);

		display.append(card.body);
	});
	console.log(cards);
};

const submitToCart = (item) => {
	let i = cart.findIndex(element => {
		return element.id === item.id;
	});
	if(i === -1) {
		cart.push(item);
	} else {
		cart[i].quantity++;
	}
	console.log(cart);
};

// event listener assigned to onload - returns all products in ascending order
window.onload = function() {
	console.log(fakeStore("products?sort=asc"));
};