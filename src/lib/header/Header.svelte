<script lang="ts">
	import { page } from '$app/stores';
	import logo from './mindfulness-connected-logo_w.svg';
	import Button from '../components/Button.svelte';

</script>

<header>



	<nav>
		<a href="www.mindfulnessconnected.com">
			<img src={logo} alt="Mindfulness Connected" />
		</a>
		<Button buttonClass='ml-auto' cta={"Buy the book"}/>


	</nav>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>

</style>
