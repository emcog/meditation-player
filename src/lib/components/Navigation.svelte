<script context="module">
	import { tracks } from '../data/tracks';
	import Button from './Button.svelte';
</script>


<nav>
	<div>logo</div>:
	<span>Meditation:</span>
	<ul>
		{ #each tracks as {title}, i }
			<li><a href='#{ i + 1 }'>{i + 1}. <span class='hidden'>{title}</span></a></li>
		{/each}
	</ul>

	<ul class='ml-auto'>
		<li><Button cta={"Buy the book"}/></li>
		<li><img src='/apple-podcasts-lg-2x.png' alt='apple podcasts'/></li>
	</ul>
</nav>
<style>
nav, ul {
		display: flex;
		flex-direction: row;
		background: grey;
}



</style>