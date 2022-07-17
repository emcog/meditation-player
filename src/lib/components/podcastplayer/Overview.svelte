<script>
	import { title, subtitle, summary } from '$lib/data/podcast.json';
	import Summary from './Summary.svelte';
	export let overviewClass;
</script>
<section class="{overviewClass}" aria-label='summary' >
	<img class="row-span-1 rounded drop-shadow-md"
			 alt="'I relate therefore I am', A portrait of Descartes with a images of people overlaid"
			 src="$lib/images/MBOE-social-mindfulness_cover-1x.jpeg"
			 srcset="src/lib/images/MBOE-social-mindfulness_cover-1x.jpeg 1x,
								src/lib/images/MBOE-social-mindfulness_cover-1halfx.jpeg 1.5x,
								src/lib/images/MBOE-social-mindfulness_cover-2x.jpeg 2x,
								src/lib/images/MBOE-social-mindfulness_cover-3x.jpeg 3x,
								src/lib/images/MBOE-social-mindfulness_cover-4x.jpeg 4x" />
	<div class="row-span-2 -mt-3">
		<h1>{title}</h1>
		<p aria-label="sub-title">{subtitle}</p>
		<Summary/>

	</div>
</section>
<style>
</style>