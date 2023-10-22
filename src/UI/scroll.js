 const Scroll = (element, animationClass) => {

	const scrollAppear = () => {

		let elementToAnimate = document.querySelectorAll(element)
		var elementsAray = Array.prototype.slice.call(elementToAnimate);

		elementsAray.forEach(element => {
			let elementPosition = element.getBoundingClientRect().top			
			let screenPosition = window.innerHeight
			if (elementPosition < screenPosition ) {
				element.classList.add(animationClass)
			} else {
				element.classList.remove(animationClass)
			}
		});

		

	}
	window.addEventListener('scroll', scrollAppear)
}
export default Scroll