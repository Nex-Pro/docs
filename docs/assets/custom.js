document
	.querySelectorAll(".md-nav__item--nested > .md-nav__toggle")
	.forEach(el => {
		if (el.checked == false) el.click();
	});
