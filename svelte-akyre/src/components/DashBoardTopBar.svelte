<script>
    export let currentUser
</script>

<style>
    .top-bar-container {
        display: flex;
        width: 100%;
    }

    .top-bar-search {
        flex-grow: 1;
    }

    .icon-container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 52px;
        padding-left: 10px;
        font-size: 20px;
    }

    .icon-container > i {
        color: #a1a1a1;
    }

    .input-search {
        display: flex;
    }

    .input-search > input {
        height: 50px;
        padding-left: 40px;
        outline: none;
        border-radius: 20px;
        -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        border: none;
        color: #a1a1a1;
        font-size: 26px;
        font-family: "Roboto", sans-serif;
        width: 40%;
    }

    .top-bar-user-name {
        font-family: "Roboto", sans-serif;
        font-size: 31px;
        font-weight: 300;
        color: #262525;
        margin-right: 10px;
    }

    .top-bar-user {
        display: flex;
        height: 100%;
        align-items: center;
    }

    .top-bar-user-photo > img {
        height: 52px;
        border: 1px solid;
        border-radius: 50%;
        -webkit-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.75);
    }
</style>

<div style="margin: 50px">
    <div class="top-bar-container">
        <div class="top-bar-search">
            <div class="input-search">
                <div class="icon-container">
                    <i class="fas fa-search"></i>
                </div>
                <input placeholder="Search...">
            </div>
        </div>
        <div class="top-bar-user">
            <div class="top-bar-user-name">
                {currentUser.first_name} {currentUser.last_name}
            </div>
            <div class="top-bar-user-photo">
                <img src="{currentUser.photo_url}">
            </div>
        </div>
    </div>
</div>
