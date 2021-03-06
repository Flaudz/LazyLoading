const images = document.querySelectorAll("img");
images.forEach((img, index) => {
	img.setAttribute(
		"data-src",
		`https://picsum.photos/200/300?random=${index.toString()}`
	);
});

if ("loading" in HTMLImageElement.prototype) {
	images.forEach((img) => {
		img.setAttribute("height", "300px");
		img.setAttribute("width", "200px");
		img.src = img.dataset.src;
		img.removeAttribute("data-src");
	});
} else {
	const script = document.createElement("script");
	script.src =
		"https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js";
	document.body.appendChild(script);
}
