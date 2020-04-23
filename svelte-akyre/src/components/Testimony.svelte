<script>
    import ATestimony from "./ATestimony.svelte";
    import {onMount} from 'svelte';

    const testimonies = [
        {
            name: "Lucas Alloin",
            job_label: "Developpeur accompagné sur du Java Script",
            testimony: "Lest aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son que travailler avec du texte",
            photo_url: "https://picsum.photos/200"
        }, {
            name: "Alexandre Fourcat",
            job_label: "Developpeur accompagné sur du Rust",
            testimony: "Lest aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son que travailler avec du texte",
            photo_url: "https://picsum.photos/200"
        }, {
            name: "Thomas Nicollet",
            job_label: "Developpeur accompagné sur du AWS",
            testimony: "Lest aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son que travailler avec du texte",
            photo_url: "https://picsum.photos/200"
        }, {
            name: "Nathan Guigui",
            job_label: "Developpeur accompagné sur du React",
            testimony: "Lest aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son que travailler avec du texte",
            photo_url: "https://picsum.photos/200"
        }, {
            name: "Richard Boom",
            job_label: "Developpeur accompagné sur du Vue.JS",
            testimony: "Lest aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son que travailler avec du texte",
            photo_url: "https://picsum.photos/200"
        }, {
            name: "Night Le Z",
            job_label: "Developpeur accompagné sur du C++",
            testimony: "Lest aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son que travailler avec du texte",
            photo_url: "https://picsum.photos/200"
        }
    ]

    let shuffled = testimonies.sort(() => 0.5 - Math.random());

    let selected = shuffled.slice(0, 3);

    let doISpin = false;

    const refreshTestimonies = () => {
        setTimeout(() => {
            refreshTestimonies();
        }, 10000)

        setTimeout(() => {
            doISpin = false
        }, 5000)
        doISpin = true;

        setTimeout(() => {
            shuffled = testimonies.sort(() => 0.5 - Math.random());
            selected = shuffled.slice(0, 3);
        }, 2500)
    }

    onMount(async () => {
        refreshTestimonies();
    });


</script>

<style>
    .testimony-title {
        font-family: "Roboto", sans-serif;
        color: #91AFFF;
        font-weight: 500;
        font-size: 50px;
    }

    .testimonies-container {
        margin: 250px 0;
        width: 75%;
        display: flex;
        flex-direction: column;
    }

    @-webkit-keyframes spinner {
        from {
            -webkit-transform: rotateY(0deg);
        }
        to {
            -webkit-transform: rotateY(-360deg);
        }
    }

    /* all other browsers */
    @keyframes spinner {
        from {
            -moz-transform: rotateY(0deg);
            -ms-transform: rotateY(0deg);
            transform: rotateY(0deg);
        }
        to {
            -moz-transform: rotateY(-360deg);
            -ms-transform: rotateY(-360deg);
            transform: rotateY(-360deg);
        }
    }

    .spinner {
        -webkit-animation-name: spinner;
        -webkit-animation-timing-function: ease;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-duration: 5s;

        animation-name: spinner;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
        animation-duration: 5s;

        -webkit-transform-style: preserve-3d;
        -moz-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }


</style>

<div class="testimonies-container">
    <div class="testimony-title">Témoignages</div>

    <div class="{doISpin ? 'spinner' : ''}">
        {#each selected as testimony, i}
            <ATestimony testimony={testimony} orientation={i % 2 === 0 ? "right" : "left"}/>
        {/each}
    </div>
</div>