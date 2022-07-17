<script>
	import { summary } from '$lib/data/podcast.json';
</script>
<div class="relative">
	<p class="[height:70px] [text-overflow: ellipsis] [overflow:hidden]" aria-label="summary">{summary}</p>
	<button class="uppercase absolute top-[33px] right-0 pl-16 bg-gradient-to-l from-white via-white">more</button>
</div>