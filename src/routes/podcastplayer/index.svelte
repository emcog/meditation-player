<script>
	import Navigation from '../../lib/components/podcastplayer/Navigation.svelte';
	import Episode from '../../lib/components/podcastplayer/Episode.svelte';
	import Overview from '$lib/components/podcastplayer/Overview.svelte';
</script>

<Navigation/>
<Overview overviewClass="w-1/2"/>
<Episode episodeClass="w-full"/>

<style></style>