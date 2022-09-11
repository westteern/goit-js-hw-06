const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const products = document.querySelector("#ingredients");

const elements = [];

const createNewElement = ingredients.map(ingredient => {
	const newEl = document.createElement("li");
	newEl.textContent = ingredient;
	newEl.classList.add("item");
	elements.push(newEl);
});
products.append(...elements);
