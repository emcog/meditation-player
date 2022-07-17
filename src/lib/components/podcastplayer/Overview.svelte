<script>
	import { title, summary, image } from '$lib/data/podcast.json';
	export let overviewClass;
</script>
<section class="{overviewClass} flex flex-row" aria-label='summary' >
	<img class=" flex-none w-220 inline-block temp"
			 alt="'I relate therefore I am', A portrait of Descartes with a images of people overlaid"
			 src="$lib/images/MBOE-social-mindfulness_cover-1x.jpeg"
			 srcset="src/lib/images/MBOE-social-mindfulness_cover-1x.jpeg 1x,
								src/lib/images/MBOE-social-mindfulness_cover-1halfx.jpeg 1.5x,
								src/lib/images/MBOE-social-mindfulness_cover-2x.jpeg 2x,
								src/lib/images/MBOE-social-mindfulness_cover-3x.jpeg 3x,
								src/lib/images/MBOE-social-mindfulness_cover-4x.jpeg 4x" />
	<div class='float-right inline-block temp'>
		<h1>{title}</h1>
		<p>{summary}</p>
	</div>
</section>
<style>
	.temp{
      flex: 1;
      min-width: 0;
      min-height: 0;
			width: 220px;
	}
</style>