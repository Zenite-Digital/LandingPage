function onClickGroupedButton(el) {
	const parent = el.parentElement;
	const children = Array.from(parent.children);

	children.forEach((element) => {
		element.classList.remove("active");
	});
	el.classList.add("active");
}
