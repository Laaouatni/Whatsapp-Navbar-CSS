let navItems = document.querySelectorAll(".nav-item");

document.body.style.setProperty("--total-nav-items", navItems.length);

navItems.forEach((thisItem, index) => {
	thisItem.addEventListener("click", () => {
		document.body.style.setProperty("--active-index", index);
		toogleActiveClass();
		toogleScrollBar();

		function toogleActiveClass() {
			navItems.forEach((item) => {
				item.classList.remove("active");
			});
			thisItem.classList.add("active");
		}

		function toogleScrollBar() {
			let thisSection = document.querySelectorAll("#container > section")[index];
			let navHeight = document.querySelector("nav").offsetHeight;
			let minHeightSection = window.innerHeight - navHeight * 2;

			if (thisSection.offsetHeight > minHeightSection) {
				document.body.style.overflowY = "auto";
			} else {
				document.body.style.overflowY = "hidden";
				window.scrollTo(0, 0);
			}
		}
	});
});
