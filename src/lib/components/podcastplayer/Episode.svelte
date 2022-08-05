<script>
	import { episodes } from '$lib/data/podcast.json';

	let lisArray;

	let hasBullets;

	function checkBullets(copy){
		hasBullets = copy.includes("\n•");
		console.log(copy);
		console.log(hasBullets);

	}



	function bulletsMakeLis(copy) {
			//parse copy for bullets and format into array
			let stringAllBullets = copy.slice(copy.indexOf('\n'), copy.lastIndexOf('\n'));
			let stringRemoveNewLine = stringAllBullets.replaceAll("\n", "");
			let lisArrayEmptySlot = stringRemoveNewLine.split("•");
			let lisArraySpareSpace = lisArrayEmptySlot.slice(1);
			lisArray = lisArraySpareSpace.map(li => li.trim())
	}

	bulletsMakeLis(episodes[0].description);


	// if episode condtains "\n •" then parse into clean array, itterate over clean array into ul li

	export let episodeClass;
</script>

<ul class="{episodeClass}" id ="track-list">
	{#each episodes as { title, description, url }, i }
		<li id='{ i + 1 }' class="mt-4">
<!--			<span class="text-xs mr-1 text-slate-600 font-sans font-medium">{i + 1}.</span>-->
			<h2 class="inline-block mt-4">{title}</h2>
			<figure class="border-b-2 pb-2 mb-6">
				<audio controls src={url} class='w-full mt-4 mb-3'></audio>
			<figcaption on:click={checkBullets(description)}>
					<!--	todo inject Lis if present-->
					<p>{description}</p>
				</figcaption>
			</figure>
		</li>
	{/each}
</ul>
<!--todo probably need to refactor into script tag with map or somesuch-->