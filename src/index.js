import { TweenMax, Elastic } from 'gsap'

document.querySelector('.add').addEventListener('mouseenter', addButtonEnter)
document.querySelector('.add').addEventListener('mouseleave', addButtonLeave)

function addButtonEnter() {
	TweenMax.to('#addButton', 2, {
		rotation: 45,
		transformOrigin: '50% 50%',
		ease: Elastic.easeOut.config(1, 0.3),
	})
	TweenMax.to('#addButton', 2, {
		rotation: 45,
		transformOrigin: '50% 50%',
		ease: Elastic.easeOut.config(1, 0.3),
	})
}

function addButtonLeave() {
	TweenMax.to('#addButton', 2, {
		rotation: 0,
		transformOrigin: '50% 50%',
		ease: Elastic.easeOut.config(1, 0.3),
	})
	TweenMax.to('#addButton', 2, {
		rotation: 0,
		transformOrigin: '50% 50%',
		ease: Elastic.easeOut.config(1, 0.3),
	})
}
