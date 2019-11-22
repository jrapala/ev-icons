import { TweenMax, Elastic, TimelineLite, TimelineMax, Back } from 'gsap'
import Vivus from 'vivus'

window.addEventListener('DOMContentLoaded', event => {
	document
		.getElementById('addButton')
		.addEventListener('mouseenter', addButtonEnter)
	document
		.getElementById('addButton')
		.addEventListener('mouseleave', addButtonLeave)
	document
		.getElementById('saveButtonCircle')
		.addEventListener('mouseenter', saveButtonEnter)
	document
		.getElementById('saveButtonWrapper')
		.addEventListener('click', saveButtonClick)
	document
		.getElementById('saveButtonV2Circle')
		.addEventListener('mouseenter', saveButtonV2Enter)
	document
		.getElementById('saveButtonV2Wrapper')
		.addEventListener('click', saveButtonV2Click)
	document
		.getElementById('mtSpinner')
		.addEventListener('click', mtSpinnerClick)
	document
		.getElementById('boxSpinner')
		.addEventListener('mouseenter', boxSpinnerEnter)

	function mtSpinnerClick() {
		document
			.getElementById('mtSpinner')
			.removeEventListener('click', mtSpinnerClick)

		TweenMax.set('#mtSpinnerText', { opacity: 0 })
		TweenMax.set('#mtSpinnerBars', { opacity: 100 })
		TweenMax.set('#mtSpinnerCheckMark', {
			scale: 0,
		})

		var tl = new TimelineMax({
			repeat: 1,
		})
		var tl2 = new TimelineMax()
		tl2.pause()

		var bars = document.getElementsByClassName('bar')
		tl.staggerTo(
			bars,
			0.2,
			{
				scale: 0.4,
			},
			0.1
		)
			.staggerTo(
				bars,
				0.2,
				{
					scale: 1,
				},
				0.1
			)
			.eventCallback('onComplete', function() {
				tl2.play(0)
			})

		tl2.to(bars, 0.5, { scale: 0 }).to(
			'#mtSpinnerCheckMark',
			0.25,
			{
				opacity: 100,
				scale: 1,
			},
			0.25
		)
	}

	// function mtSpinnerEnter() {
	// 	var tl = new TimelineLite({
	// 		onComplete: function() {
	// 			this.restart()
	// 		},
	// 	})
	// 	var bars = document.getElementsByClassName('bar')
	// 	tl.staggerTo(
	// 		bars,
	// 		1.2,
	// 		{
	// 			scale: 0.4,
	// 			ease: Elastic.easeInOut,
	// 		},
	// 		0.1
	// 	).staggerTo(
	// 		bars,
	// 		1.2,
	// 		{
	// 			scale: 1,
	// 			ease: Elastic.easeInOut,
	// 		},
	// 		0.1
	// 	)
	// }

	function boxSpinnerEnter() {
		document
			.getElementById('boxSpinner')
			.removeEventListener('mouseenter', boxSpinnerEnter)

		var tl = new TimelineMax()
		var boxes = document.getElementsByClassName('box')
		tl.staggerTo(
			boxes,
			0.5,
			{
				scale: 0.1,
				yoyo: true,
				repeat: 3,
			},
			0.1
		)
	}
	function boxSpinnerLeave() {
		var boxes = document.getElementsByClassName('box')
		TweenMax.to(
			boxes,
			0.5,
			{
				scale: 0.1,
			},
			0.1
		)
	}

	function saveButtonV2Enter() {
		TweenMax.set('#saveButtonV2Disk', { x: 83, y: 13 })

		TweenMax.to('#saveButtonV2AddLineVertical', 0.3, {
			x: -12,
		})
		TweenMax.to('#saveButtonV2AddLineHorizontal', 0.3, {
			y: 12,
		})
		TweenMax.to(
			'#saveButtonV2Disk',
			0.1,
			{
				opacity: 100,
			},
			3
		)
		TweenMax.to('#saveButtonV2AddLineVertical', 1, {
			opacity: 0,
		})
		TweenMax.to('#saveButtonV2AddLineHorizontal', 1, {
			opacity: 0,
		})

		var path = document.getElementById('saveButtonV2Disk')
		new Vivus(path, { type: 'oneByOne', duration: 40 })
		document.getElementById('saveButtonV2Wrapper').classList.add('pointer')
	}

	function saveButtonV2Click() {
		const tl = new TimelineMax()
		TweenMax.set(['#saveButtonV2CheckMark', '#saveButtonV2Success'], {
			scale: 0,
			transformOrigin: '50% 50%',
		})
		tl.to('#saveButtonV2Circle', 0.5, {
			scale: 0.2,
			transformOrigin: '50% 50%',
		})
			.to(
				'#saveButtonV2Disk',
				0.5,
				{
					scale: 0,
					transformOrigin: '50% 50%',
				},
				0
			)
			.to(['#saveButtonV2Circle02', '#saveButtonV2Circle03'], 0.1, {
				opacity: 100,
			})
			.to('#saveButtonV2Circle02', 0.25, { x: -20 })
			.to('#saveButtonV2Circle03', 0.25, { x: 20 })
			.staggerTo(
				[
					'#saveButtonV2Circle02',
					'#saveButtonV2Circle',
					'#saveButtonV2Circle03',
				],
				0.25,
				{ y: -12, yoyo: true, repeat: 3, delay: 0.2 },
				0.1
			)
			.to(
				[
					'#saveButtonV2Circle',
					'#saveButtonV2Circle02',
					'#saveButtonV2Circle03',
				],
				0.25,
				{
					x: -20,
				}
			)
			.to('#saveButtonV2Circle', 0.25, {
				scale: 0.5,
			})
			.to('#saveButtonV2CheckMark', 0.15, {
				opacity: 100,
				scale: 0.75,
				delay: 0.05,
			})
			.to('#saveButtonV2Success', 0.25, { scale: 1, opacity: 100 })

		document
			.getElementById('saveButtonV2Wrapper')
			.removeEventListener('click', saveButtonV2Click)
	}

	function saveButtonEnter() {
		TweenMax.set('#saveButtonDisk', { x: 83, y: 13 })

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
		document.getElementById('saveButtonWrapper').classList.add('pointer')
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
				[
					'#saveButtonCircle02',
					'#saveButtonCircle',
					'#saveButtonCircle03',
				],
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
			.getElementById('saveButtonWrapper')
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
})
