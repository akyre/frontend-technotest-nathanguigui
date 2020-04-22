<script>
    import ProductPresentation from "../components/ProductPresentation.svelte"

    const presentations = [{
        name: "Code review",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo consequat velit, sit amet consectetur lectus varius non. Phasellus semper risus et eros faucibus commodo. Maecenas efficitur nunc vitae sagittis hendrerit. Sed sed ante vehicula, accumsan est quis, aliquam tortor. Sed consequat euismod erat, ut molestie erat blandit at. Vestibulum luctus efficitur diam a rutrum. Integer sit amet viverra justo, et aliquet mauris. Cras faucibus ante vitae mattis congue. Ut eget viverra sapien. Nullam non varius neque. Nunc condimentum laoreet lorem, et commodo eros laoreet et. Curabitur lacinia quis ligula ut pellentesque. Donec bibendum arcu urna, eu porta nisl tincidunt sit amet.",
        link: "https://google.com",
        link_label: "Get started",
        image: "https://picsum.photos/800",
        orientation: "left",
        color: "#FF1053"
    },{
        name: "Code analytics",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo consequat velit, sit amet consectetur lectus varius non. Phasellus semper risus et eros faucibus commodo. Maecenas efficitur nunc vitae sagittis hendrerit. Sed sed ante vehicula, accumsan est quis, aliquam tortor. Sed consequat euismod erat, ut molestie erat blandit at. Vestibulum luctus efficitur diam a rutrum. Integer sit amet viverra justo, et aliquet mauris. Cras faucibus ante vitae mattis congue. Ut eget viverra sapien. Nullam non varius neque. Nunc condimentum laoreet lorem, et commodo eros laoreet et. Curabitur lacinia quis ligula ut pellentesque. Donec bibendum arcu urna, eu porta nisl tincidunt sit amet.",
        link: "https://google.com",
        link_label: "Get started",
        image: "https://picsum.photos/800",
        orientation: "right",
        color: "#73C1C6"
    },{
        name: "Code review",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo consequat velit, sit amet consectetur lectus varius non. Phasellus semper risus et eros faucibus commodo. Maecenas efficitur nunc vitae sagittis hendrerit. Sed sed ante vehicula, accumsan est quis, aliquam tortor. Sed consequat euismod erat, ut molestie erat blandit at. Vestibulum luctus efficitur diam a rutrum. Integer sit amet viverra justo, et aliquet mauris. Cras faucibus ante vitae mattis congue. Ut eget viverra sapien. Nullam non varius neque. Nunc condimentum laoreet lorem, et commodo eros laoreet et. Curabitur lacinia quis ligula ut pellentesque. Donec bibendum arcu urna, eu porta nisl tincidunt sit amet.",
        link: "https://google.com",
        link_label: "Get started",
        image: "https://picsum.photos/800",
        orientation: "left",
        color: "#FFE27B"
    },]

</script>

<style>

    .head-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 75px;
    }

    .section-2 {
        margin: 125px;
        font-size: 35px;
        text-align: center;
        color: #91AFFF;
        font-family: "Roboto", sans-serif;
    }

    .section-2 > h1 {
        font-weight: 400;
    }

    .section-3 {
        display: flex;
    }

    .quote-container {
        display: flex;
        flex-direction: column;
    }

    .quote {
        margin: 0;
        padding: 0px 50px;
        color: #91AFFF;
        font-family: "Roboto", sans-serif;
        font-style: italic;
        font-size: 55px;
        font-weight: 300;
    }

    .slogan {

    }

    h5 {
        align-self: flex-end;
        margin: 0;
        margin-top: 10px;
        color: #91AFFF;
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        font-weight: 300;
    }

    .red-button {
        margin: 20px;
        background-color: #FF1053;
        border-radius: 20px;
        padding: 20px;
        color: #FFFFFF;
        font-family: "Roboto", sans-serif;
        font-size: 35px;
        text-decoration: none;
        transition: all linear 250ms;
        font-weight: 500;
    }

    .red-button:hover {
        background-color: #be0e45;
    }

    .green-button {
        margin: 20px;
        background-color: #73C1C6;
        border-radius: 20px;
        padding: 20px;
        color: #FFFFFF;
        font-family: "Roboto", sans-serif;
        font-size: 35px;
        text-decoration: none;
        transition: all linear 250ms;
        font-weight: 500;
    }
    .green-button:hover {
        background-color: #45858a;
    }

    .blank-space {
        width: 100%;
        height: 600px;
    }
</style>

<svelte:head>
    <title>Test</title>
</svelte:head>


<div class="head-container">
    <div class="quote-container">
        <h1 class="quote">Talk is cheap, show me the code.</h1>
        <h5>(cf. Linus Torvald)</h5>
    </div>

    <div class="section-2">
        <h1 class="slogan">
            Akyre, une plateforme pour les développeurs permettant de Fletcher
        </h1>
    </div>

    <div class="section-3">
        <div><a href="/historic" class="red-button">Get started</a></div>
        <div><a href="#" class="green-button">How does it work ???</a></div>
    </div>

    <div class="blank-space"></div>

    {#each presentations as pres}
        <ProductPresentation presentation={pres}/>
    {/each}



</div>

