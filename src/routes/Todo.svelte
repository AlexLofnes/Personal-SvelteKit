<script lang="ts">
    import MdAddCircleOutline from 'svelte-icons/md/MdAddCircleOutline.svelte';
    import FaCheck from 'svelte-icons/fa/FaCheck.svelte';
    import FaRegTrashAlt from 'svelte-icons/fa/FaRegTrashAlt.svelte';

	let adding: boolean = false;
	let newItem: string = "";
	let todos: any[] = [];
	let notDeltedItems: string[] = [];
	const src: string = "https://findicons.com/files/icons/1681/siena/128/trash.png"

	function addNew () {
		adding = true;
	}

	function handleSubmit () {
		todos.push({name: newItem, completed: false, deleted: false});
		notDeltedItems = todos.filter(item => !item.deleted);
		let todoNames: string[];
		let completedList: boolean[];
		console.log(todos)
		for (let i=0; i<todos.length; i++) {
			todoNames.push(todos.i.name)
			completedList.push(todos.i.completed)
		}
		writeUserData(userId, todoNames, completedList)
		newItem = "";
		adding = false;
	}

	function deleteItem (item) {
		todos = todos.filter(i => i !== item);
	}

	import { initializeApp } from "firebase/app";
    import { getDatabase, ref, set, onValue } from "firebase/database";
    const firebaseConfig: object = {
        apiKey: "AIzaSyDsn0p9Al9BEOPtQ7C7Cy-bVVWWuAx-Rog",
        authDomain: "personal-ad7a9.firebaseapp.com",
        projectId: "personal-ad7a9",
        storageBucket: "personal-ad7a9.appspot.com",
        messagingSenderId: "556252150942",
        appId: "1:556252150942:web:bd819f82c4ce6059aecf8f"
    };
	export let userId;
    const app = initializeApp(firebaseConfig);
    function writeUserData(userId: string, todos: string[], completed: boolean[]) {
        const db = getDatabase();
        set(ref(db, 'users/' + userId), {
            userId: userId,
            todos: todos,
			completed: completed
        });
    };
    const database = getDatabase(app);
</script>

{#if adding}
	<form class="" on:submit|preventDefault={handleSubmit}>
		<input class="bg-slate-600 bg-opacity-50 rounded-xl h-16 mt-0" placeholder=" New task: " bind:value={newItem}>
		<button class="sidebarIcon" type="submit"><FaCheck /></button>
	</form>

{:else}
<ul class="">
	{#each todos as item}
		<li class="pr-6 mt-4 text-5xl" on:click={() => item.completed = !item.completed}>{item.name}</li>
		<div class="sidebarIcon m-0 h-16" on:click={() => deleteItem(item)}><FaRegTrashAlt /></div>
	{/each}
</ul>

<button class="sidebarIcon mt-4" on:click={addNew}><MdAddCircleOutline /></button>
{/if}