const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

const images = [{filename: "pic1.jpg", alt: "closeup shot of a person's face"}, {filename: "pic2.jpg", alt: "rippling, beige rock"}, {filename: "pic3.jpg", alt: "a closup of white and purple flowers"}, {filename: "pic4.jpg", alt: "an egyptian mural"}, {filename: "pic5.jpg", alt: "a butterfly on a leaf"}];

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

for (const image of images) {
	const newImage = document.createElement("img");
	newImage.src = '${baseURL}${image.filename}';
	newImage.alt = image.alt;
	newImage.tabIndex = "0";
	thumbBar.appendChild(newImage);
	newImage.addEventListener("keydown", (e) => {
		if (e.code === "Enter") {
			updateDisplayedImage(e);
		}
	});
}

function updateDisplayedImage(e) {
	displayedImage.src = e.target.src;
	displayedImage.alt = e.target.alt;
}

btn.addEventListener("click", () =>  {
	if (btn.classList.contains("Dark)){
		btn.textContent = "Lighten";
		overlay.style.backgroundColor = "rgb(0 0 0/ 0.5)";
	}
	else{
		btn.textContent = "Darken";
		overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
	}