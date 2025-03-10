document.addEventListener("DOMContentLoaded", function () {
	const scrollIndicator = document.querySelector(".scroll-indicator");
	if (scrollIndicator) {
		scrollIndicator.addEventListener("click", function () {
			window.scrollTo({
				top: document.querySelector(".main-content").offsetTop,
				behavior: "smooth",
			});
		});
	}
});
