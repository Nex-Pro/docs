if (window.innerWidth >= 1220) {
	document
		.querySelectorAll(".md-nav__item--nested > .md-nav__toggle")
		.forEach(el => {
			if (el.checked == false) el.click();
		});
}

document.querySelectorAll(".md-nav--primary .md-nav__item a").forEach(el => {
	if (el.textContent.trim() == "None") el.className += " hidden";
});
