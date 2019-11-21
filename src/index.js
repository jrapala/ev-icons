import { TweenMax, Elastic, TimelineMax, Back } from 'gsap'
import Vivus from 'vivus'

document
	.getElementById('addButton')
	.addEventListener('mouseenter', addButtonEnter)
document
	.getElementById('addButton')
	.addEventListener('mouseleave', addButtonLeave)
document
	.getElementById('saveButton')
	.addEventListener('mouseenter', saveButtonEnter)
document.getElementById('saveButton').addEventListener('click', saveButtonClick)
document
	.querySelector('.saveV2')
	.addEventListener('mouseenter', saveButtonEnterV2)
document
	.querySelector('.saveV2')
	.addEventListener('mouseleave', saveButtonLeaveV2)
document.querySelector('.saveV2').addEventListener('click', saveButtonClickV2)

function saveButtonEnterV2() {
	TweenMax.set('#saveButtonDiskV2', { x: 38, y: 13 })

	TweenMax.to('#saveButtonAddLineVerticalV2', 0.3, {
		x: -12,
	})
	TweenMax.to('#saveButtonAddLineHorizontalV2', 0.3, {
		y: 12,
	})
	TweenMax.to(
		'#saveButtonDiskV2',
		0.1,
		{
			opacity: 100,
		},
		3
	)
	TweenMax.to('#saveButtonAddLineVerticalV2', 1, {
		opacity: 0,
	})
	TweenMax.to('#saveButtonAddLineHorizontalV2', 1, {
		opacity: 0,
	})

	var path = document.querySelector('#saveButtonDiskV2')
	new Vivus(path, { type: 'oneByOne', duration: 40 })
	document.getElementById('saveButtonV2').classList.add('pointer')
}

function saveButtonClickV2() {
	TweenMax.to('#saveButtonCircleV2', 0.5, {
		scale: 0.2,
		transformOrigin: '50% 50%',
	})
	TweenMax.to('#saveButtonDiskV2', 0.5, {
		scale: 0,
		transformOrigin: '50% 50%',
	})
	const tl = new TimelineMax()

	tl.to(['#saveButtonCircle02V2', '#saveButtonCircle03V2'], 0.1, {
		opacity: 100,
	})
	tl.to('#saveButtonCircle02V2', 0.25, { x: -20 })
	tl.to('#saveButtonCircle03V2', 0.25, { x: 20 })
	tl.staggerTo(
		[
			'#saveButtonCircle02V2',
			'#saveButtonCircleV2',
			'#saveButtonCircle03V2',
		],
		0.25,
		{ y: -12, yoyo: true, repeat: 3, delay: 0.2 },
		0.1
	)
	tl.to(['#saveButtonCircle02V2', '#saveButtonCircle03V2'], 0.1, {
		x: 0,
		opacity: 0,
	})
	tl.to('#saveButtonCircleV2', 0.25, {
		scale: 1,
	})
	tl.to(['#successV2', '#checkMarkV2'], 1.25, {
		opacity: 100,
	})
	document
		.querySelector('.saveV2')
		.removeEventListener('click', saveButtonClick)
}

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

	var path = document.getElementById('saveButtonDisk')
	new Vivus(path, { type: 'oneByOne', duration: 40 })
	document.getElementById('saveButton').classList.add('pointer')
}

function saveButtonClick() {
	const tl = new TimelineMax()
	TweenMax.set(['#saveButtonCheckMark', '#saveButtonSuccess'], {
		scale: 0,
		transformOrigin: '50% 50%',
	})
	tl.to('#saveButtonCircle', 0.5, {
		scale: 0.2,
		transformOrigin: '50% 50%',
	})
		.to(
			'#saveButtonDisk',
			0.5,
			{
				scale: 0,
				transformOrigin: '50% 50%',
			},
			0
		)
		.to(['#saveButtonCircle02', '#saveButtonCircle03'], 0.1, {
			opacity: 100,
		})
		.to('#saveButtonCircle02', 0.25, { x: -20 })
		.to('#saveButtonCircle03', 0.25, { x: 20 })
		.staggerTo(
			['#saveButtonCircle02', '#saveButtonCircle', '#saveButtonCircle03'],
			0.25,
			{ y: -12, yoyo: true, repeat: 3, delay: 0.2 },
			0.1
		)
		.to(['#saveButtonCircle02', '#saveButtonCircle03'], 0.1, {
			x: 0,
			opacity: 0,
		})
		.to('#saveButtonCircle', 0.25, {
			scale: 1,
		})
		.to('#saveButtonCheckMark', 0.15, {
			opacity: 100,
			scale: 1,
			delay: 0.05,
		})
		.to('#saveButtonSuccess', 0.25, { scale: 1, opacity: 100 })
	document
		.getElementById('saveButton')
		.removeEventListener('click', saveButtonClick)
}

function addButtonEnter() {
	TweenMax.to('#addButtonPlus', 2, {
		rotation: 45,
		transformOrigin: '50% 50%',
		ease: Elastic.easeOut.config(1, 0.3),
	})
}

function addButtonLeave() {
	TweenMax.to('#addButtonPlus', 2, {
		rotation: 0,
		transformOrigin: '50% 50%',
		ease: Elastic.easeOut.config(1, 0.3),
	})
}
