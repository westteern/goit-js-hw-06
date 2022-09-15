const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", validateLog);

function validateLog() {
	if (inputRef.value === "") {
		inputRef.removeAttribute("class");
	} else {
		inputRef.value.trim().length === Number(inputRef.dataset.length)
			? (inputRef.classList = "valid")
			: (inputRef.classList = "invalid");
	}
}
