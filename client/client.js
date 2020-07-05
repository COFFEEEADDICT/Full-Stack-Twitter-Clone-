//select the only form
const form = document.querySelector("form");
//select the loader
const loadingElement = document.querySelector(".loading");
loadingElement.style.display = "none";

// submit button (send meow)
form.addEventListener("submit", (event) => {
	event.preventDefault();
	const formData = new FormData(form);

	const name = formData.get("name");
	const content = formData.get("content");
	const mew = {
		name,
		content,
	};

	loadingElement.style.display = "";
	form.style.display = "none";
});
