<script lang="ts">
	// import { page } from '$app/stores';
	import logo from './mindfulness-connected-logo_t.svg';
	import Button from '../components/Button.svelte';

</script>

<header>
	<!--	adobe futura-->
	<link rel="stylesheet" href="https://use.typekit.net/edm6svv.css"/>

	<nav class='flex py-4 bg-gray-100 mb-2'>
		<a class='md:ml-8 ml-4' href="www.mindfulnessconnected.com">
			<img class='w-[120px]' src={logo} alt="Mindfulness Connected" />
		</a>
		<Button buttonClass='ml-auto md:mr-8 mr-4' cta={"Buy the book"}/>


	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
</style>
