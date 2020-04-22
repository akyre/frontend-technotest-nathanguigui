<script>
    export let presentation;
</script>

<style>
    .presentation-name {
        font-family: "Roboto", sans-serif;
        font-size: 65px;
        font-weight: 500;
        margin: 100px 0 0 0;
        color: #91AFFF
    }

    .content-container {
        display: flex;
        align-items: center;
        background-color: #F6F9FC;
        padding: 40px;
    }

    .content-and-button {
        flex: 1 1 0px;
    }

    .content-image {
        flex: 1 1 0px;
        display: flex;
    }

    .content {
        font-family: 'PT Sans Narrow', sans-serif;
        color: #ADC4FF;
        font-size: 35px;
    }

    .content-left {
        flex-direction: row;
    }

    .content-right {
        flex-direction: row-reverse;
    }

    .image-left {
        justify-content: flex-end;

    }

    .image-right {
        justify-content: flex-start;
    }

    .left-align {
        margin-right: 10%;
    }

    .right-align {
        margin-left: 10%;
    }

    .link-container {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }

    .link-style {
        font-family: "Roboto", sans-serif;
        color: #FFFFFF;
        padding: 15px;
        border-radius: 15px;
        font-size: 30px;
        text-decoration: none;
        font-weight: 600;
        transition: all linear 250ms;
    }

    .link-style:hover {
        background-color: var(--color)!important;
    }

    .name-left {
        text-align: start;
    }

    .name-right {
        text-align: end;
    }

</style>

<div style="width: 75%">
    <h1 class="{presentation.orientation === 'left' ? 'name-left' : 'name-right'} presentation-name">{presentation.name}</h1>

    <div class="{presentation.orientation === 'left' ? 'content-container content-left' : 'content-container content-right'}">

        <div class="content-and-button">
            <div class="content">
                {presentation.content}
            </div>
            <div class="link-container">
                <a style="background-color: {presentation.color}; --color: {presentation.color + '99'}" class="link-style"
                   href="{presentation.link}">{presentation.link_label}</a>
            </div>
        </div>
        <div class="{presentation.orientation === 'left' ? 'content-image image-left' : 'content-image image-right'}">
            <img width="60%" class="{presentation.orientation === 'left' ? 'left-align' : 'right-align'}"
                 src="{presentation.image}">
        </div>
    </div>
</div>
