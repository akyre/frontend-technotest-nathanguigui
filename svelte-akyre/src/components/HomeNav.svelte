<script>
	export let segment;
</script>

<style>

    .home-nav-container {
        display: flex;
        justify-content: space-around;
        margin: 40px;
    }

    .main-logo {
        width: 175px;
    }

    .account-link {
        display: flex;
        align-items: center;
        flex-grow: 1;
        justify-content: center;
    }

    .home-link {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-grow: 2;
    }

    .home-logo {
        flex-grow: 1;
        display: flex;
        justify-content: center;
    }

    [aria-current] {
        font-weight: 600!important;
    }

    [aria-current]:hover {
        color: #91AFFF!important;
    }

    .basic-link {
        font-size: 30px;
        color: #91AFFF;
        transition: color linear 250ms;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-style: italic;
    }

    .basic-link:hover {
        color: #5f75be;
    }

    .link-right {
        margin: 10px;
        color: #91AFFF;
        transition: color linear 250ms;
        font-size: 23px;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
    }

    .link-right:hover {
        color: #5f75be;
    }

    .link-right-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .filled-link {
        padding: 10px 30px;
        background-color: #91AFFF;
        border-radius: 20px;
        color: #FFFFFF;
        font-family: "Roboto", sans-serif;
        font-weight: bold;
        font-size: 23px;
        transition: all linear 250ms;
    }

    .filled-link:hover {
        background-color: #5f75be;
        color: #FFFFFF!important;
    }

    a {
        text-decoration: none;
    }

    .logo-link {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<div class="home-nav-container">
    <div class="home-logo">
        <a class="logo-link" href="#">
            <img class="main-logo" src="/logo.svg">
        </a>
    </div>
    <div class="home-link">
        <div><a href="#" class="basic-link" rel=prefetch aria-current='{!segment ? "page" : undefined}'>Products</a></div>
        <div><a href="#" class="basic-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}'>Partners</a></div>
        <div><a href="#" class="basic-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}'>Community</a></div>
        <div><a href="#" class="basic-link" rel=prefetch aria-current='{segment === "#" ? "page" : undefined}'>Pricing</a></div>
    </div>
    <div class="account-link">
        <div style="display: flex">
            <div class="link-right-container"><a class="link-right" href="#">Sign in</a></div>
            <div class="link-right-container"><a class="link-right filled-link" href="#">Sign up</a></div>
        </div>
    </div>
</div>
