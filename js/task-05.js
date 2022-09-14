const inputForm = document.querySelector("#name-input");
const outputForm = document.querySelector("#name-output");

inputForm.addEventListener("keydown", logMessage);

// function logMessage() {
// 	let log = inputForm.value;
// 	if (log === "") {
// 		outputForm.textContent = "Anonymous";
// 	} else {
// 		outputForm.textContent = log;
// 	}
// }
