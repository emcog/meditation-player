<script>
	import { episodes } from '$lib/data/podcast.json';
	import DownloadButton from './DownloadButton.svelte';
	export let episodeClass;
</script>

<ul class="{episodeClass}" id ="track-list">
	{#each episodes as { title, description, url }, i }
		<li id='{ i + 1 }'>
			<figure class='border-b-2 pb-8'>
			<figcaption>
					<h2 class="mt-4">{title}</h2>
					<p>{description}</p>
				</figcaption>
				<audio controls src={url} class='w-full'></audio>
			</figure>
		</li>
	{/each}
</ul>
