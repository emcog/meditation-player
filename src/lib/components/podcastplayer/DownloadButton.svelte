<script>
	export let downloadButtonClass;
	export let downloadLink;
</script>
<!--<form method='get' action='https://media.mindfulnessconnected.com/three-step-reset.mp3'>-->
<!--	<button type="submit" value="download" class="{downloadButtonClass} rounded-full border-2 px-6 py-1 uppercase tracking-widest text-xs font-bold">-->
<!--</form>-->
<!--TODO just opens new tab-->
<a href="{downloadLink}" download="{downloadLink}" type="Button" class="{downloadButtonClass} rounded-full border-2 px-6 py-1 uppercase tracking-widest text-xs font-bold">
	download
</a>