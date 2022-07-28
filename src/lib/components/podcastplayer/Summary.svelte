<script>
	import { summary } from '$lib/data/podcast.json';

	let isIframeVisible = false;

	function handleClick() {
		return isIframeVisible = true;
	}

</script>
<!--todo this all feels a bit hacky, is there a better solution?-->
<div class="relative h-14">
	<p class="[height:70px] [text-overflow: ellipsis] [overflow:hidden]" aria-label="truncated summary">{summary}</p>
	<button on:click={handleClick} class="uppercase absolute top-[33px] right-0 pl-16 bg-gradient-to-l from-white via-white">more</button>
	<iframe class:toggleIframe={isIframeVisible === false}
					class='bg-indigo-100'
					title="Full summary"
					width="300" height="200"
					srcdoc='<html><body>{summary}</body></html>'>
	</iframe>
</div>

<style>
	.toggleIframe {
			visibility: hidden;
	}
</style>