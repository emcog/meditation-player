<script>
	// import { interpret, assign, useMachine } from '@xstate/svelte';
	import { useMachine } from '@xstate/svelte';
	import { createMachine, interpret, assign } from 'xstate';

	console.clear()
	// const { createMachine, interpret, assign } = XState

	let playToggle;
		// = document.querySelector('#playToggle') // <button>
	let audio;
		// = document.querySelector('audio') // <audio>
	let currentTime;
	// = document.querySelector('#currentTime') // <time>
	let durationTime;
		// = document.querySelector('#durationTime') // <time>
	let scrubber;
		// = document.querySelector('#scrubber') // <input type=range>
	let progress;
	// = document.querySelector('#progress') // <progress>

	const machine = createMachine({
		initial: 'paused',
		context: {
			currentTime: 0, // (s)
			durationTime: 0, // (s)
		},
		on: {
			durationchange: {
				actions: [
					assign({
						durationTime: (context, event) => event.target.duration
					}),
					'renderDurationTime'
				]
			},
			timeupdate: {
				actions: [
					assign({
						currentTime: (context, event) => event.target.currentTime
					}),
					'renderCurrentTime',
					'updateScrubber'
				]
			},
			SCRUB: {
				actions: [
					assign({
						currentTime: (context, event) => event.value * context.durationTime
					}),
					'updateAudioCurrentTime',
					'renderCurrentTime',
					'updateScrubber'
				]
			},
			seeked: {
				actions: [
					assign({
						currentTime: (context, event) => event.target.currentTime
					}),
					'renderCurrentTime',
					'updateScrubber'
				]
			}
		},
		states: {
			paused: {
				on: {
					TOGGLE_PLAY: {
						target: 'playing',
						actions: ['playAudio']
					},
				}
			},
			playing: {
				on: {
					TOGGLE_PLAY: {
						target: 'paused',
						actions: ['pauseAudio']
					},
				}
			}
		}
	}, {
		actions: {
			playAudio: () => {
				audio.play()
				playToggle.dataset.state = 'playing'
			},
			pauseAudio: () => {
				audio.pause()
				playToggle.dataset.state = 'paused'
			},
			updateAudioCurrentTime: (context, event) => {
				audio.currentTime = context.currentTime
			},
			renderCurrentTime: (context) => {
				currentTime.innerText = formatDuration(context.currentTime)
			},
			renderDurationTime: (context) => {
				durationTime.innerText = formatDuration(context.durationTime)
			},
			updateScrubber: (context) => {
				// update position of the <input type="range"> element
				scrubber.value = context.currentTime / context.durationTime
				// update position of the <progress> element
				progress.value = context.currentTime / context.durationTime
			}
		}
	})

	function formatDuration(duration) {
		function formatTime(int, options) {
			const leadingZero = options && options.leadingZero
			return Math.floor(int).toString().padStart(leadingZero ? 2 : 0, '0')
		}

		const hours = Math.floor(duration / 60 / 60)
		const minutes = (duration - (hours * 60 * 60)) / 60
		const seconds = duration % 60

		return [
			formatTime(hours),
			formatTime(minutes, { leadingZero: true }),
			formatTime(seconds, { leadingZero: true })
		].join(':')
	}

	const service = interpret(machine).start()

	function isClicked() {
		console.log('isClicked');
		service.send({ type: 'TOGGLE_PLAY' })
	}

	const isClicked2 = () => console.log('isClicked2')

	/*

	playToggle.addEventListener('click', event => {
		service.send({ type: 'TOGGLE_PLAY' })
	})

	audio.addEventListener('timeupdate', service.send)
	audio.addEventListener('durationchange', service.send)
	// audio.addEventListener('seeked', service.send)

	scrubber.addEventListener('input', event => {
		service.send({
			type: 'SCRUB',
			value: parseFloat(event.target.value)
		})
	})

 */
</script>

<button on:click={isClicked}>CLICK ME</button>
<div class="h-screen p-16 bg-gray-200 antialiased flex flex-col justify-center">
	<div class="shadow-lg rounded-lg max-w-2xl bg-gray-400 mx-auto">
		<main class="px-8 py-6">
			<h1 class="font-bold text-2xl leading-tight text-gray-900">CSS Aspect Ratio, Rendering Engines, and More with Jen Simmons</h1>
			<p class="mt-8">Jen Simmons is back on the show to talk with us about her new HTML Essentials course, CSS Aspect Ratio, rendering engines vs browsers, and a big announcement from her personally!</p>
		</main>
		<div class="mt-12 bg-gray-800 text-gray-300 px-8 py-6 rounded-b-lg" id="player">
			<audio bind:this={audio} src="https://chtbl.com/track/643D/cdn.simplecast.com/audio/167887/167887a0-ac00-4cf9-bc69-b5ca845997db/115a8d3c-5349-40f2-94f3-6bd45d9356a1/shoptalkshow-415_tc.mp3"></audio>
			<div class="flex gap-8 items-center"><img class="-mt-12 border-2 border-gray-300 rounded-md" id="artwork" width="120" height="120" src="https://i2.wp.com/shoptalkshow.com/wp-content/uploads/2019/10/Jen-Simmons-2019.jpg?resize=80%2C80&amp;ssl=1" alt=""/>
				<div class="flex w-full gap-4 items-center" id="timeline">
					<button bind:this={playToggle} on:click={isClicked}   class="border border-gray-500 text-white rounded-full px-4 py-2" id="playToggle" aria-label="Play" data-state="paused"><span class="play">
              <svg class="fill-current" viewbox="0 0 20 20" width="20" height="20">
                <polygon points="4 4 16 10 4 16"></polygon>
              </svg></span><span class="pause">
              <svg class="fill-current" viewbox="0 0 20 20" width="20" height="20">
                <path d="M5,4 L8,4 L8,16 L5,16 L5,4 Z M12,4 L15,4 L15,16 L12,16 L12,4 Z"></path>
              </svg></span></button><span class="sr-only">Current time:</span><span bind:this={currentTime} class="w-12 text-right text-sm" id="currentTime">0:00:00</span>
					<div class="flex-grow" id="playback-bar">
						<progress bind:this={progress} class="w-full block h-1 appearance-none border-0 mt-2" id="progress" value="0" max="1" step="0.01"></progress>
						<input bind:this={scrubber} class="w-full -mt-3 block z-10 relative appearance-none bg-transparent" id="scrubber" type="range" value="0" max="1" step="0.01"/>
					</div><span class="sr-only">Total time:</span><span bind:this={durationTime} class="w-12 text-right text-sm" id="durationTime">0:00:00</span>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
#playToggle[data-state='playing'] .play {
	display: none;
}
#playToggle[data-state='paused'] .pause {
	display: none;
}
:root {
	--gray-600: #718096;
	--gray-400: #cbd5e0;
	--gray-200: #edf2f7;
	--purple-500: #9f7aea;
	--green-500: #48bb78;
	--blue-500: #4299e1;
}
progress {
	background-color: var(--gray-600);
}
progress::-moz-progress-bar {
	background-color: var(--gray-200);
}
#playback-bar:hover progress::-moz-progress-bar {
	background-color: var(--blue-500);
}
input[type=range]::-moz-range-thumb,
input[type=range]::-webkit-slider-thumb {
	appearance: none;
	background: var(gray-200);
	border: none;
	opacity: 0;
	width: 5px;
}
#playback-bar:hover input[type=range]::-moz-range-thumb,
#playback-bar:hover input[type=range]::-webkit-slider-thumb {
	opacity: 1;
}
#currentTime,
#durationTime {
	font-feature-settings: 'tnum';
}
</style>