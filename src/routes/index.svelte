<script context="module">
	const allPosts = import.meta.glob('./**/*.md');
	let body = [];
	for (let path in allPosts) {
		body.push(
			allPosts[path]().then(article => {
				return { path, metadata: article.metadata };
			})
		);
	}
	export async function load() {
		const posts = await Promise.all(body);
		return {
			props: { posts }
		};
	}
</script>

<script>
	import Article from '$lib/components/ArticleListing.svelte';
    export let posts;
</script>

<div class="articles">
	{#each posts as { path, metadata: { title, date, updated, description } }}
		<Article {title} {date} {updated} text={description} link={path} />
	{/each}
</div>

<style>
	.articles {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
</style>
