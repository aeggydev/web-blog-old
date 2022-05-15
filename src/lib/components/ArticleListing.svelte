<script>
	export let date = '';
	export let title = '';
	export let text = '';
    export let updated = '';
	export let link;
	$: actualLink = link.replace(/\.md/, "");
    $: lastUpdated = updated ? ` | Last updated: ${updated}` : '';
</script>

<article>
	<a class="title" href={actualLink}>{title}</a>
    <div class="date">{date}{lastUpdated}</div>
	<div class="text">{text}</div>
</article>

<style lang="scss">
	article {
        text-align: left;
        transition: all 0.2s ease;
	}
	.date {
		color: var(--sub-text-color);
	}
	.title {
		font-size: 1.6rem;
		color: var(--text-color);
		text-decoration: none;
		&:hover {
			text-decoration: underline;
			text-decoration-thickness: 3px;
		}
	}
	.text {
		display: flex;
		flex-direction: column;

        margin-top: 0.5rem;
	}
</style>
