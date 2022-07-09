<script context="module">
	import { tracks } from '../data/tracks';
	// console.log(tracks);

</script>
<ul id ="track-list">
	{#each tracks as { title, url }, i }
		<li>
			<figcaption>
			{ i + 1 }: {title}
			</figcaption>
			<audio
				controls
				src={url}>
			</audio>
		</li>
	{/each}
</ul>


<style>

</style>