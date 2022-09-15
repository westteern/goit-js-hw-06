const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const { email, password } = event.currentTarget.elements;

	if (email.value === "" || password.value === "") {
		return alert("Please fill in all fields!");
	}

	console.log(`Login: ${email.value}, Password: ${password.value}`);
	event.currentTarget.reset();
}
