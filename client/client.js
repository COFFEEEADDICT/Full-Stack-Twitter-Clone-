//select the only form
const form = document.querySelector("form");

const mewsElement = document.querySelector(".mews");

const API_URL = "http://localhost:5000/mews";

//select the loader
const loadingElement = document.querySelector(".loading");
loadingElement.style.display = "";

listAllMews();

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
		.then((createdMew) => {
			console.log(createdMew);
			form.reset();
			form.style.display = "";
			listAllMews();
		});
});

//GET all mews/format
function listAllMews() {
	mewsElement.innerHTML = "";
	fetch(API_URL)
		.then((res) => res.json())
		.then((mews) => {
			mews.reverse();
			mews.forEach((mew) => {
				const div = document.createElement("div");

				const header = document.createElement("h3");
				header.textContent = mew.name;

				const contents = document.createElement("p");
				contents.textContent = mew.content;

				const date = document.createElement("small");
				date.textContent = new Date(mew.created);

				div.appendChild(header);
				div.appendChild(contents);
				div.appendChild(date);
				mewsElement.appendChild(div);
			});
			loadingElement.style.display = "none";
		});
}
