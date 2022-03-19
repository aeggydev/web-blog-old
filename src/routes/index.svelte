<script>
	import Article from '$lib/components/ArticleListing.svelte';
	let firstArticle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi justo, dictum et neque eget, dignissim egestas orci. Quisque dictum ut nisi ac aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque id metus egestas, rutrum nulla ut, iaculis odio. Cras id justo et dui facilisis fringilla at nec ligula. Etiam lacinia elit et accumsan bibendum. Sed leo ante, fringilla non mollis a, ornare a libero. Quisque fermentum, nunc a mollis condimentum, orci nunc porttitor sapien, ac fringilla diam turpis ac nisl. Proin pretium blandit nibh nec tincidunt.`;
</script>

<div class="articles">
<Article date="18. 3. 2022" title="Emacs vs Vi" text={firstArticle} />
<Article date="18. 3. 2021" title="Emacs vs Vi" text={firstArticle} />
</div>

<style>
    .articles {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
</style>