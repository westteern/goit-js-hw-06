const allCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${allCategories.length}`);

const categoryNameAndCountElements = allCategories.forEach(category => {
	const categoryName = category.firstElementChild.textContent;
	const countCategoryElements = category.querySelectorAll("li").length;
	console.log(`Category: ${categoryName}`);
	console.log(`Elements: ${countCategoryElements}`);
});
