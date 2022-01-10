<script lang="ts">
    import MdAddCircleOutline from 'svelte-icons/md/MdAddCircleOutline.svelte';

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
		newItem = "";
		adding = false;
	}

	function deleteItem (item) {
		todos = todos.filter(i => i !== item);
	}

</script>

{#if adding}
	<form on:submit|preventDefault={handleSubmit}>
		<input class="rounded-xl bg-slate-700" placeholder="Add a new task: " bind:value={newItem}>
		<button type="submit">Submit</button>
	</form>

{:else}
<ul class="flex flex-row">
	{#each todos as item}
		<li class="clicked" on:click={() => item.completed = !item.completed}>{item.name}</li>
		<img class="w-10 h-10 hover:cursor-pointer" {src} alt="Delte Item" on:click={() => deleteItem(item)}>
	{/each}
</ul>

<button class="w-10" on:click={addNew}><MdAddCircleOutline /></button>
{/if}