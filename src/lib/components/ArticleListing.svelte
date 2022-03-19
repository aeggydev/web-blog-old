<script>
	export let date = '';
	export let title = '';
	export let text = '';
</script>

<article>
	<a class="title">{title}</a>
    <div class="date">{date}</div>
	<div class="text">{text}</div>
</article>

<style>
	article {
        max-width: 60rem;
        margin: 0 auto;
        transition: all 0.2s ease;
	}
    .title:hover {
        text-decoration: underline;
        text-decoration-thickness: 3px;
    }
	.date {
		color: #3f3f3f;
	}
	.title {
		font-size: 48px;
	}
	.text {
        margin-top: 0.5rem;
	}
</style>
