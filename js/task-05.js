const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", logMessage);

function logMessage() {
	let log = inputRef.value.trim();
	if (log === "") {
		outputRef.textContent = "Anonymous";
	} else {
		outputRef.textContent = log;
	}
}
