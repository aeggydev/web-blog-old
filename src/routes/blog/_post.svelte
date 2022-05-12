<script>
	export let title;
	export let date;
</script>

<article>
	<div class="title">{title}</div>

	{#if date}
		<div class="published">{date}</div>
	{/if}

	<slot />
</article>

<style lang="scss">
	article {
		overflow-wrap: break-word;
	}

	.title {
		font-size: 1.6rem;
		text-decoration: none;
		color: black;
	}
	.published {
		color: #3f3f3f;
	}
</style>
