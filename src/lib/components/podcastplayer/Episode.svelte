<script context="module">
	import { episodes } from '$lib/data/podcast.json';
	// import Overview from './Overview.svelte';

</script>
<script>
	import Button from '../Button.svelte';
</script>
<ul id ="track-list">
	{#each episodes as { title, description, url }, i }
		<li id='{ i + 1 }'>
			<figure>
			<figcaption>
					<h2>{i + 1 }. {title}</h2>
					<p>{description}</p>
					<Button parentClass='float-right' cta={"Download"}/>
				</figcaption>
				<audio controls src={url} class='w-full'></audio>
			</figure>

		</li>
	{/each}
</ul>
