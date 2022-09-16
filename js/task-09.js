const colorRef = document.querySelector(".color");
const changeColorBtnRef = document.querySelector(".change-color");
const bodyRef = document.querySelector("body");
console.dir(colorRef);

changeColorBtnRef.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
	let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	bodyRef.style.backgroundColor = color;
	colorRef.textContent = color;
}
