<script>
	export let title;
	export let date;
	export let description;
</script>

<article>
	<div class="title">{title}</div>

	{#if date}
		<div class="published">{date}</div>
	{/if}
	{#if description}
		<div class="description">{description}</div>
	{/if}

	<slot />
</article>

<style lang="scss">
	.title {
		font-size: 40px;
		text-decoration: none;
		color: black;
	}
	.description {
		margin-top: 0.5rem;
	}
	.published {
		color: #3f3f3f;
	}
</style>
