<script>
    export let history;
    let arrOfStar = [];
    for (let left = history.note.mean; left >= 1; left--) {
        arrOfStar.push({
            className: "fa fa-star checked"
        })
    }
    if (history.note.mean % 1 !== 0)
        arrOfStar.push({className: "fas fa-star-half checked"});
    for (let missing = 5 - arrOfStar.length; missing; missing--) {
        arrOfStar.push({
            className: "far fa-star"
        })
    }
</script>

<style>
    .history {
        display: flex;
        padding: 15px;
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        margin: 50px;
        width: 65%;
    }

    .blue-box {
        background-color: #6689E6;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        margin: 0 20px 20px 20px;
        color: #F3F3F3;
        -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    }

    .history-video {
        outline: none;
        border-radius: 5px;
        margin: 0 20px 20px 20px;
        -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    }

    .comment {
        -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        border-radius: 5px;
        margin: 20px;
        padding: 10px;
    }

    .message {
        display: flex;
        justify-content: flex-end;
        flex-grow: 1;
        align-items: flex-end;
    }

    .checked {
        color: #FFE27B!important;
    }

    .insight-ctn {
        margin-top: 20px;
        display: flex;
        align-items: center;
    }

    .insight {
        font-size: 20px;
        margin-left: 10px;
    }

    .robotoMediumItalic {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: italic;
    }

    .robotoThinItalic {
        font-family: "Roboto", sans-serif;
        font-weight: lighter;
        font-style: italic;
    }

    .robotoLightItalic {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-style: italic;
    }

    .ThirtySize {
        font-size: 30px;
    }

    .TwentyFourSize {
        font-size: 24px;
    }

    .TwentyFiveSize {
        font-size: 25px;
    }

</style>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</svelte:head>

<div class="history">
    <div class="left">
        <div class="blue-box">
            <div>
                <div>
                    <div class="ThirtySize robotoMediumItalic">{history.client.name} - {history.client.job}</div>
                    <div style="display: flex; margin-top: 5px;"><div class="robotoThinItalic TwentyFiveSize">{history.date}</div> <div style="margin-left: 6px" class="robotoMediumItalic TwentyFiveSize"> - {history.hour}</div></div>
                </div>
                <div class="insight-ctn">
                    <div>
                        {#each arrOfStar as currStar}
                            <span class="{currStar.className}"></span>
                        {/each}
                    </div>
                    <div class="insight robotoThinItalic">
                        {history.note.count} avis
                    </div>
                </div>
            </div>
            <div class="message">
                <img src="/enveloppe.svg">
            </div>
        </div>
        <div class="comment">
            <div class="robotoLightItalic ThirtySize">Commentaire:</div>
            <div class="comment-content robotoLightItalic TwentyFourSize">
                {history.comment}
            </div>
        </div>
    </div>
    <div class="right">
        <div>
            <video class="history-video" width="350px" controls>
                <source src="{history.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
</div>
