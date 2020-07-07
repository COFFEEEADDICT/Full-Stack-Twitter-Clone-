//select the only form
const form = document.querySelector("form");

const API_URL = "http://localhost:5000/mews";

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

	//sending data
	fetch(API_URL, {
		method: "POST",
		body: JSON.stringify(mew),
		headers: {
			"content-type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((createdMew) => console.log(createdMew));
});
