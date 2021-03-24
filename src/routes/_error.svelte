<script>
	import Header from '../components/Header.svelte';
	import Projects from '../components/Projects.svelte';

	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>Maxime Houyoux | {status}</title>
</svelte:head>

<Header title={[status, error.message]}></Header>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}

<main class="container container-fluid">
	<Projects></Projects>
</main>