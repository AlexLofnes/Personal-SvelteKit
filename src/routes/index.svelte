<script lang="ts">
    import '../app.css';
    import About from './About.svelte'
    import Todo from './Todo.svelte';
    import Sort from './Sort.svelte';
    import Pathfind from './Pathfind.svelte';
    import FaSortAlphaDown from 'svelte-icons/fa/FaSortAlphaDown.svelte';
    import IoMdInformationCircleOutline from 'svelte-icons/io/IoMdInformationCircleOutline.svelte';
    import IoIosCheckboxOutline from 'svelte-icons/io/IoIosCheckboxOutline.svelte';
    import GiMaze from 'svelte-icons/gi/GiMaze.svelte';

    let about: boolean = false;
    let todo: boolean = false;
    let sort: boolean = false;
    let pathfind: boolean = false;
</script>

<div class="flex">
    <div class="fixed top-0 left-0 h-screen w-20 flex flex-col bg-slate-800 text-white shadow-lg items-center">
        <button class="sidebarIcon group" on:click={() => {about = true; todo = false; sort = false; pathfind = false}}><IoMdInformationCircleOutline /> <span class="sidebar-tooltip group-hover:scale-100">About</span></button>
        <button class="sidebarIcon group" on:click={() => {about = false; todo = true; sort = false; pathfind = false}}><IoIosCheckboxOutline /> <span class="sidebar-tooltip group-hover:scale-100">Todo List</span></button>
        <button class="sidebarIcon group" on:click={() => {about = false; todo = false; sort = true; pathfind = false}}><FaSortAlphaDown /> <span class="sidebar-tooltip group-hover:scale-100">Sorting Algorithm Visualisaton</span></button>
        <button class="sidebarIcon group" on:click={() => {about = false; todo = false; sort = false; pathfind = true}}><GiMaze /> <span class="sidebar-tooltip group-hover:scale-100">Pathfinding Algorithm Visualisaton</span></button>
    </div>
</div>

<div class="text-gray-200 text-3xl ml-24">
    {#if about}
        <About />
    {:else if todo}
        <Todo />
    {:else if sort}
        <Sort />
    {:else if pathfind}
        <Pathfind />
    {:else}
        <About />
    {/if}
</div>
