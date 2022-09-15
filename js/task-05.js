const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", logMessage);

const defaultLog = outputRef.textContent;

function logMessage() {
	let log = inputRef.value.trim();
	if (log === "") {
		outputRef.textContent = defaultLog;
	} else {
		outputRef.textContent = log;
	}
}
