const inputRef = document.querySelector("input");
const idRef = document.querySelector("#text");

inputRef.addEventListener("input", changeSize);

function changeSize() {
	idRef.style.fontSize = `${inputRef.value}px`;
}
