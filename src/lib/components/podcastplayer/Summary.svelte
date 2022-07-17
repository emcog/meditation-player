<script>
	import { summary } from '$lib/data/podcast.json';

	let isIframeVisible = false;

	function handleClick() {
		return isIframeVisible = true;
	}

</script>
<div class="relative">
	<p class="[height:70px] [text-overflow: ellipsis] [overflow:hidden]" aria-label="truncated summary">{summary}</p>
	<button on:click={handleClick} class="uppercase absolute top-[33px] right-0 pl-16 bg-gradient-to-l from-white via-white">more</button>
	<iframe class:toggleIframe={isIframeVisible === false} title="Full summary" width="300"
					height="200" srcdoc='<html><body>{summary}</body></html>'></iframe>
</div>

<style>
	.toggleIframe {
			visibility: hidden;
	}
</style>