<script>
	import Nav from '../components/Nav.svelte';
	import DashBoardTopBar from "../components/DashBoardTopBar.svelte"
	const currentUser = {
		first_name: "Richard",
		last_name: "Perrier",
		photo_url: "https://picsum.photos/200"
	};
	export let segment;
</script>

<style>
	.all-container {
		display: flex;
	}
</style>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
</svelte:head>



<div class="all-container">
	<Nav {segment}/>
	<div>
		<DashBoardTopBar currentUser="{currentUser}"/>
		<slot></slot>
	</div>
</div>
