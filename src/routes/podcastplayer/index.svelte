<script>
	import Navigation from '../../lib/components/podcastplayer/Navigation.svelte';
	import Episode from '../../lib/components/podcastplayer/Episode.svelte';
	import Overview from '$lib/components/podcastplayer/Overview.svelte';
</script>

<Navigation/>

<Overview overviewClass="max-w-xl grid grid-cols-[220px_1fr] gap-x-2"/>
<Episode episodeClass="max-w-xl"/>

<style></style>