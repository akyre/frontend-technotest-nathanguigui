<script>

</script>

<style>
    .footer {
        background-color: #262525;
        padding: 50px 150px;
        display: flex;
        justify-content: space-between;

    }

    .footer-left {
        display: flex;
        flex-direction: column;
        flex: 1 1 0px;
    }

    .footer-links {
        display: flex;
    }

    .link-category {
        display: flex;
        flex-direction: column;
        margin-right: 10%;
    }

    .category-title {
        color: #FFFFFF;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        margin-bottom: 10px;
    }

    .legal-mentions {
        margin-top: 75px;
        color: #FFFFFF;
        font-family: "Roboto", sans-serif;
        font-style: italic;
        font-size: 16px;
        font-weight: 300;

    }

    .legal-mentions > a {
        color: #FFFFFF;
    }

    .footer-logo {
        display: flex;
        justify-content: flex-end;
        flex: 1 1 0px;
        justify-content: center;
    }

    .footer-logo-text {
        font-family: "Roboto", sans-serif;
        color: #91AFFF;
        font-size: 23px
    }

    .footer-logo-content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
    }

    .category-link {
        color: #888888;
        font-family: "Roboto", sans-serif;
        font-size: 12px;
        margin: 3px 0;
    }

    a {
        text-decoration: none;
    }
</style>

<div class="footer">
    <div class="footer-left">
        <div class="footer-links">
            <div class="link-category">
                <div class="category-title">Products</div>
                <a href="https://google.com" class="category-link">Code review</a>
                <a href="https://google.com" class="category-link">Peer coding</a>
                <a href="https://google.com" class="category-link">Benchmarking</a>
                <a href="https://google.com" class="category-link">Analytics</a>
            </div>
            <div class="link-category">
                <div class="category-title">Company</div>
                <a href="https://google.com" class="category-link">About us</a>
                <a href="https://google.com" class="category-link">Management</a>
                <a href="https://google.com" class="category-link">Newsroom</a>
                <a href="https://google.com" class="category-link">Contact us</a>
            </div>
            <div class="link-category">
                <div class="category-title">Ressources</div>
                <a href="https://google.com" class="category-link">Github</a>
            </div>
        </div>
        <div class="legal-mentions">
            © 2020 Akyre - All rights reserved | <a href="https://google.com">Terms of Service</a> | <a href="https://google.com">Privacy</a> | <a href="https://google.com">Legal</a>
        </div>
    </div>
    <div class="footer-logo">
        <div class="footer-logo-content">
            <img width="50%" src="/logo.svg">
            <div class="footer-logo-text">Trouvez l'expert dont <strong>vous</strong> avez besoin.</div>
        </div>
    </div>
</div>