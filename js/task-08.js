const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
	event.preventDefault();
	const { email, password } = event.currentTarget.elements;

	if (email.value === "" || password.value === "") {
		return alert("Please fill in all fields!");
	}
	const data = { email: email.value, password: password.value };

	console.log(data);
	event.currentTarget.reset();
}
