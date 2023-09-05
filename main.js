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
	return data;
};

// event listener assigned to onload - returns all products in ascending order
window.onload = function() {
	console.log(fakeStore("products?sort=asc"))
};