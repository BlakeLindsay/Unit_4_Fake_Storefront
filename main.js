const electronics = document.getElementById('Electronics');
const jewelry = document.getElementById('Jewelry');
const menClothing = document.getElementById("Men's Clothing");
const womenClothing = document.getElementById("Women's Clothing");
const display = document.getElementById('display');
const API = "https://fakestoreapi.com/";

async function fakeStore(endpoint) {
	let result = await fetch(API + endpoint);
	let data = await result.json();
	return data;
};