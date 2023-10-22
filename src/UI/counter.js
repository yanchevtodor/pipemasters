
const Counter = (element, speed) => {
	const scrollAppear = () => {
		
		let elementToanimate = document.querySelector(element)
		let elementPosition = elementToanimate.getBoundingClientRect().top			
		let screenPosition = window.innerHeight -150

		if (elementPosition < screenPosition ) {			
			const conters = document.querySelectorAll('.conterCount')

			conters.forEach(counter => {
				const updateCount = () => {
					const target = +counter.getAttribute('datatarget')
					const count = +counter.innerText
					const inc = Math.round(target / speed)
					if (count < target) {
						counter.innerText = count + inc
						setTimeout(updateCount, 1);
					} else {
						counter.innerText = target
					}
				}	
				updateCount()	
			})
		} else {
			const conters = document.querySelectorAll('.conterCount')

			conters.forEach(counter => {
				counter.innerText=0
			})
		}
	}
	window.addEventListener('scroll', scrollAppear)
}
export default Counter