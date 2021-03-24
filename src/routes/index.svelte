<script>
	import Header from '../components/Header.svelte';
	import Projects from '../components/Projects.svelte';
</script>

<style>

</style>

<svelte:head>
	<title>Maxime Houyoux | Fullstack developer | Portfolio</title>
</svelte:head>

<Header title={["Maxime", "Fullstack", "developer"]}></Header>

<main class="container container-fluid">
	<Projects></Projects>
</main>