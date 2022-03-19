<script>
	export let title;
	export let date;
	export let description;
</script>

<article>
	<div class="title">{title}</div>

	{#if description}
		<div class="description">{description}</div>
	{/if}
	{#if date}
		<div class="published">Published: {date}</div>
	{/if}

	<slot />
</article>

<style>
	article {
		padding-top: 2rem;
		margin: 0 5%;
	}
	.title {
		font-size: 48px;
		text-decoration: none;
		color: black;
	}
	.title:hover {
		text-decoration: underline;
		text-decoration-thickness: 3px;
	}
	.description {
		margin-top: 0.5rem;
	}
	.published {
		color: #3f3f3f;
	}
</style>
