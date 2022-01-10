<script lang="ts">
    import '../app.css';
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

<div class="flex -z-10">
    <div class="fixed top-0 left-0 h-screen w-20 flex flex-col bg-slate-800 text-white shadow-lg items-center">
        <button class="w-16 p-2 my-4 bg-slate-700 rounded-3xl hover:text-green-300 hover:rounded-xl hover:bg-gray-700 transition-all duration-300 ease-linear" on:click={() => {about = true; todo = false; sort = false; pathfind = false}}><IoMdInformationCircleOutline /></button>
        <button class="w-16 p-2 my-4 bg-slate-700 rounded-3xl hover:text-green-300 hover:rounded-xl hover:bg-gray-700 transition-all duration-300 ease-linear" on:click={() => {about = false; todo = true; sort = false; pathfind = false}}><IoIosCheckboxOutline /></button>
        <button class="w-16 p-2 my-4 bg-slate-700 rounded-3xl hover:text-green-300 hover:rounded-xl hover:bg-gray-700 transition-all duration-300 ease-linear" on:click={() => {about = false; todo = false; sort = true; pathfind = false}}><FaSortAlphaDown /></button>
        <button class="w-16 p-2 my-4 bg-slate-700 rounded-3xl hover:text-green-300 hover:rounded-xl hover:bg-gray-700 transition-all duration-300 ease-linear" on:click={() => {about = false; todo = false; sort = false; pathfind = true}}><GiMaze /></button>
    </div>
</div>

<h1 class="m-30 text-yellow-900">asdas</h1>

<div class="text-gray-200 text-3xl ml-24">
    {#if about}
        <h1>About This Website</h1>
    {:else if todo}
        <Todo />
    {:else if sort}
        <Sort />
    {:else if pathfind}
        <Pathfind />
    {/if}
</div>
