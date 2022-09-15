const inputRef = document.querySelector("input");
const idRef = document.querySelector("#text");

inputRef.addEventListener("input", changeSize);

inputRef.value = Number(inputRef.getAttribute("min"));
function changeSize() {
	idRef.style.fontSize = `${inputRef.value}px`;
}
