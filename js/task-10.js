const inputRef = document.querySelector("input");
const btnCreateRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");
const boxRef = document.querySelector("#boxes");

inputRef.addEventListener("input", onInputValue);

let amouts;
function onInputValue() {
	amouts = Number(inputRef.value);
	return amouts;
}
const boxesArrey = [];
btnCreateRef.addEventListener("click", () => createBoxes(amouts));

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amouts) {
	boxRef.innerHTML = "";
	let size = 30;
	for (let i = 0; i < amouts; i += 1) {
		boxRef.insertAdjacentHTML(
			"beforeend",
			`<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`,
		);
		size += 10;
	}
	boxRef.append(...boxesArrey);
}
btnDestroyRef.addEventListener("click", destroyBoxes);
function destroyBoxes() {
	boxRef.innerHTML = "";
}
