<script>
	import { episodes } from '$lib/data/podcast.json';
	export let episodeClass;
</script>

<ul class="{episodeClass}" id ="track-list">
	{#each episodes as { title, description, url }, i }
		<li id='{ i + 1 }' class="mt-4">
			<h2 class="mt-4">{title}</h2>
			<figure class="border-b-2 pb-2 mb-6">
				<audio controls src={url} class='w-full mt-4 mb-3'></audio>
			<figcaption>
					<p>{description}</p>
				</figcaption>
			</figure>
		</li>
	{/each}
</ul>
