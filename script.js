const imgs = document.querySelectorAll("img");

imgs.forEach((img, index) => {
	img.setAttribute(
		"src",
		`https://picsum.photos/200/300?random=${index.toString()}`
	);
});
