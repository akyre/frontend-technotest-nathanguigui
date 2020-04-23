<script>
    export let testimony;
    export let orientation;
</script>

<style>
    .a-testimony-container {
        display: flex;
        flex-direction: row;
        margin: 60px 0;
    }

    .a-testimony-container-right {
        flex-direction: row-reverse !important;
    }

    .testimony-testimony {
        flex: 1 1 0px;
        background-color: #91AFFF;
        /*border-radius: 5px;*/
        -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        padding: 50px 20px;

        -webkit-perspective: 1200px;
        -moz-perspective: 1200px;
        -ms-perspective: 1200px;
        perspective: 1200px;
        z-index: 1;
    }

    .testimony-head {
        display: flex;
        align-items: center;
    }

    .testimony-image {
        flex: 1 1 0px;
        display: flex;
        justify-content: center;
    }

    .testimony-image > img {
        border-radius: 50%;
        border: 5px solid #FFE27B;
    }

    .testimony-content {
        flex: 2 1 0px;
        font-family: "Roboto", sans-serif;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 20px;
    }

    .testimony-author {
        display: flex;
        justify-content: center;
        margin-top: 40px;
    }

    .testimony-name {
        font-family: "Roboto", sans-serif;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 20px;
    }

    .testimony-job {
        font-family: "Roboto", sans-serif;
        color: #FFFFFF;
        font-weight: 300;
        font-style: italic;
        font-size: 20px;
        margin-left: 8px;
    }

    .testimony-abstract {
        flex: 1 1 0px;
        background-color: #91AFFF57;
        opacity: .8;
        position: relative;
        top: 27px;
        left: -81px;
    }

    .testimony-abstract-right {
        left: 81px !important;
    }
</style>

<div class="{orientation === 'left' ? '' : 'a-testimony-container-right'} a-testimony-container">
    <div class="testimony-testimony">
        <div class="testimony-head">
            <div class="testimony-image">
                <img src="{testimony.photo_url}" width="60%">
            </div>
            <div class="testimony-content">
                {testimony.testimony}
            </div>
        </div>
        <div class="testimony-author">
            <div class="testimony-name">
                {testimony.name},
            </div>
            <div class="testimony-job">
                {testimony.job_label}
            </div>
        </div>
    </div>
    <div class="{orientation === 'left' ? '' : 'testimony-abstract-right'} testimony-abstract">

    </div>
</div>