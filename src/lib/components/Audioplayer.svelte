<script context="module">
	import { tracks } from '../../data/tracks';

</script>
<ul id ="track-list">
	{#each tracks as { title, description, url }, i }
		<li id='{ i + 1 }'>
			<figure>
			<figcaption>
					<h2>{i + 1 }. {title}</h2>
					<p>{description}</p>
				</figcaption>
				<audio controls src={url}>
				</audio>
			</figure>
		</li>
	{/each}
</ul>


<style>
h2 {
		font-size: 3rem;
}

		li {
		background: white;
		border-bottom-width: 1px;
		border-bottom-color: black ;
		padding:20px ;
}

audio {
		width: 100%;
}

</style>