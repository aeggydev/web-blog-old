<div class="nav">
	<div>My name is nellerdev</div>
	<div class="links">
		<a href="/">Articles</a>
		<a href="/about">About</a>
		<a href="/projects">Projects</a>
		<a href="/contact">Contact</a>
		<a href="https://github.com/aeggydev" target="_blank">Github</a>
	</div>
	<div class="icons">
		<img src="/icons/rss.svg" alt="RSS Feed" />
		Feed
	</div>
</div>

<style lang="scss">
	.nav {
		display: flex;
		flex-direction: column;
		row-gap: 11px;
	}
	.links {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		padding-right: 20%;
		a {
			color: #632626;
			text-decoration: none;
			&:hover {
				text-decoration: underline;
			}
		}
	}
	.icons {
		display: flex;
		align-items: center;
		gap: 5px;
	}
</style>
