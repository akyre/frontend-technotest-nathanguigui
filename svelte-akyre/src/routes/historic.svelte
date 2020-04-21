<script>
    import AnHistory from "../components/AnHistory.svelte"

    const allHistories = [
        {
            client: {
                name: "Emilie Bernard",
                job: "Architecte cloud"
            },
            note: {
                mean: 4.5,
                count: 5
            },
            date: "12/09/2020",
            hour: "16h20",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel risus elementum neque euismod tempus. Quisque vehicula dolor libero, eget malesuada tortor.",
            video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }, {
            client: {
                name: "Jean Peuxplus",
                job: "Maçon"
            },
            note: {
                mean: 1,
                count: 17
            },
            date: "24/12/2019",
            hour: "16h20",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel risus elementum neque euismod tempus. Quisque vehicula dolor libero, eget malesuada tortor.",
            video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }];
</script>

<style>
    .all-historic {
        padding: 50px 250px 50px 50px;
    }
</style>

<svelte:head>
	<title>Histoy</title>
</svelte:head>

<h1>Historic</h1>

<div class="all-historic">
    {#each allHistories as history}
        <AnHistory history={history}/>
    {/each}
</div>
