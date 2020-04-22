<script>
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}


	hr {
		width: 100%;
		border: 1px solid white;
		border-right: none;
		border-left: none;
	}

	h3 {
		color: #6689E6;
		padding: 10px 10px 10px 20px;
		font-family: "Roboto", sans-serif;
		font-size: 35px;
		margin: 0!important;
		font-style: italic;
		font-weight: 500;
	}

	.nav-link {
		text-decoration: none;
		display: block;
		padding: 10px 10px 10px 20px;
		font-family: "Roboto", sans-serif;
		font-size: 26px;
		color: #91AFFF;
		margin: 5px 0;
		transition: all linear 250ms;
	}

	.nav-link:hover {
		background-color: #9ea7ff;
		color: #F6F9FC;
	}

	[aria-current] {
		background-color: #6689E6!important;
		color: #F6F9FC!important;
	}

	.nav-container {
		background-color: #F6F9FC;
		display: flex;
		flex-direction: column;
		width: 20%;
		-webkit-box-shadow: 1px 0px 8px 0px rgba(153, 153, 153, 1);
		-moz-box-shadow: 1px 0px 8px 0px rgba(153, 153, 153, 1);
		box-shadow: 1px 0px 8px 0px rgba(153, 153, 153, 1);
	}

	.nav-logo {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-logo > img {
		height: 80px;
		padding: 50px;
	}
</style>
<!--

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>

		&lt;!&ndash; for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen &ndash;&gt;
		<li><a class=nav-link rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li>
		<li><a class=nav-link rel=prefetch aria-current='{segment === "historic" ? "page" : undefined}' href='historic'>historic</a></li>
	</ul>
</nav>
-->


<div class="nav-container">
	<div class="nav-logo">
		<img src="/logo-ae.svg">
	</div>
	<div class="nav-section">
		<h3 class="nav-section-title">Services</h3>
		<div><a class="nav-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}' href='#'>Code review</a></div>
		<div><a class="nav-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}' href='#'>Code analytics</a></div>
		<div><a class="nav-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}' href='#'>Code benchmarking</a></div>
		<div><a class="nav-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}' href='#'>Peer coding</a></div>
	</div>
	<hr>
	<div>
		<h3 class="nav-section-title">Tools</h3>
		<div><a class="nav-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}' href='#'>Calendar</a></div>
		<div><a class="nav-link" rel=prefetch aria-current='{segment === "historic" ? "page" : undefined}' href='historic'>Historic</a></div>
		<div><a class="nav-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}' href='#'>Messages</a></div>
	</div>
	<hr>
	<div>
		<h3 class="nav-section-title">Accounts</h3>
		<div><a class="nav-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}' href='#'>Profile</a></div>
		<div><a class="nav-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}' href='#'>Billing</a></div>
		<div><a class="nav-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}' href='#'>Security</a></div>
		<div><a class="nav-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}' href='#'>Referrals</a></div>
	</div>
</div>
