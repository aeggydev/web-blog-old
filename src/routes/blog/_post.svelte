<script>
	export let title;
	export let date;
	export let description;

	function goBack() {
		history.back()
	}
</script>

<article>
	<span class="go_back" on:click={goBack}><img src="/arrow-left.svg" alt="Left arrow" />Go back</span>
	<div class="title">{title}</div>

	{#if description}
		<div class="description">{description}</div>
	{/if}
	{#if date}
		<div class="published">Published: {date}</div>
	{/if}

	<slot />
</article>

<style lang="scss">
	.go_back {
		margin-left: 1.5rem;
		width: auto;
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		img {
			height: 1.2em;
		}
	}
	article {
		padding-top: 2rem;
		margin: 0 5%;
	}
	.title {
		font-size: 48px;
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
