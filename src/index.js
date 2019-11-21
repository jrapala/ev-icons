import { TweenMax, Elastic, TimelineMax, Back } from 'gsap'
import Vivus from 'vivus'

document.querySelector('.add').addEventListener('mouseenter', addButtonEnter)
document.querySelector('.add').addEventListener('mouseleave', addButtonLeave)
document.querySelector('.save').addEventListener('mouseenter', saveButtonEnter)
document.querySelector('.save').addEventListener('mouseleave', saveButtonLeave)
document.querySelector('.save').addEventListener('click', saveButtonClick)

function saveButtonEnter() {
	TweenMax.set('#saveButtonDisk', { x: 38, y: 13 })

	TweenMax.to('#saveButtonAddLineVertical', 0.3, {
		x: -12,
	})
	TweenMax.to('#saveButtonAddLineHorizontal', 0.3, {
		y: 12,
	})
	TweenMax.to(
		'#saveButtonDisk',
		0.1,
		{
			opacity: 100,
		},
		3
	)
	TweenMax.to('#saveButtonAddLineVertical', 1, {
		opacity: 0,
	})
	TweenMax.to('#saveButtonAddLineHorizontal', 1, {
		opacity: 0,
	})

	var path = document.querySelector('#saveButtonDisk')
	new Vivus(path, { type: 'oneByOne', duration: 40 })
	document.getElementById('saveButton').classList.add('pointer')
}

function saveButtonClick() {
	TweenMax.to('#saveButtonCircle', 0.5, {
		scale: 0.2,
		transformOrigin: '50% 50%',
	})
	TweenMax.to('#saveButtonDisk', 0.5, {
		scale: 0,
		transformOrigin: '50% 50%',
	})
	const tl = new TimelineMax()

	tl.to(['#saveButtonCircle02', '#saveButtonCircle03'], 0.1, { opacity: 100 })
	tl.to('#saveButtonCircle02', 0.25, { x: -20 })
	tl.to('#saveButtonCircle03', 0.25, { x: 20 })
	tl.staggerTo(
		['#saveButtonCircle02', '#saveButtonCircle', '#saveButtonCircle03'],
		0.25,
		{ y: -12, yoyo: true, repeat: 3, delay: 0.2 },
		0.1
	)
	tl.to(['#saveButtonCircle02', '#saveButtonCircle03'], 0.1, {
		x: 0,
		opacity: 0,
	})
	tl.to('#saveButtonCircle', 0.25, {
		scale: 1,
	})
	tl.to(['#success', '#checkMark'], 1.25, {
		opacity: 100,
	})
	document
		.querySelector('.save')
		.removeEventListener('click', saveButtonClick)
}

function saveButtonLeave() {
	TweenMax.to('#saveButtonAddLineVertical', 0.3, {
		x: 0,
	})
	TweenMax.to('#saveButtonAddLineHorizontal', 0.3, {
		y: 0,
	})
	TweenMax.to('#saveButtonDisk', 0.1, {
		opacity: 0,
	})
	TweenMax.to(
		'#saveButtonDisk',
		0.1,
		{
			opacity: 100,
		},
		3
	)
}

function addButtonEnter() {
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
}
