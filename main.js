// global references to the categories in the navbar
const electronics = document.getElementById('Electronics');
const jewelry = document.getElementById('Jewelry');
const menClothing = document.getElementById("Men's Clothing");
const womenClothing = document.getElementById("Women's Clothing");

// global reference to the display
const display = document.getElementById('display');

// global reference to the API that will be used
const API = "https://fakestoreapi.com/";

// the four categories in the navbar are assigned their event listeners
electronics.onclick = function() {
	console.log(fakeStore("products/category/electronics"))
};

jewelry.onclick = function() {
	console.log(fakeStore("products/category/jewelry"))
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
	});
	
	// creates and appends the parts of the cards
	cards.forEach(card => {
		card.body.className = 'card';
		card.body.style = 'width: 18rem;';
		card.image.className = 'card-img-top';
		card.image.src = `${card.product.image}`;
		card.image.alt = `${card.product.title}`;
		card.title.innerText = `${card.product.title}`;
		card.title.className = 'card-title';
		card.accordion.className = 'accordion';
		card.descriptionItem.className = 'accordion-item';
		card.descriptionHeader.className = 'accordion-header';
		card.descriptionButton.className = 'accordion-button';
		card.descriptionButton.innerText = 'Description';
		card.descriptionButton.data
		card.descriptionCollapse.className = 'accordion-collapse collapse show';
		card.descriptionBody.className = 'accordion-body';
		card.descriptionBody.innerText = `${card.product.description}`;
		card.priceItem.className = 'accordion-item';
		card.priceHeader.className = 'accordion-header';
		card.priceButton.className = 'accordion-button';
		card.priceButton.innerText = 'Price';
		card.priceCollapse.className = 'accordion-collapse collapse show';
		card.priceBody.className = 'accordion-body';
		card.priceBody.innerText = `${card.product.price}`;
		card.addButton.innerText = 'Add to Cart';

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
}

// event listener assigned to onload - returns all products in ascending order
window.onload = function() {
	console.log(fakeStore("products?sort=asc"))
};