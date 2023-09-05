const electronics = document.getElementById('Electronics');
const jewelry = document.getElementById('Jewelry');
const menClothing = document.getElementById("Men's Clothing");
const womenClothing = document.getElementById("Women's Clothing");
const display = document.getElementById('display');
const API = "https://fakestoreapi.com/";

const fakeStore = async (endpoint) => {
	let result = await fetch(API + endpoint);
	console.log(result);
	let data = await result.json();
	console.log(data);
	return data;
};

console.log(fakeStore("products/category/jewelery"));

window.onload = function() {console.log(fakeStore("products"))}