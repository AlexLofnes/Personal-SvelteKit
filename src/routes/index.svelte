<script lang="ts">
    //files
    import '../app.css';
    import About from './About.svelte'
    import Todo from './Todo.svelte';
    import Sort from './Sort.svelte';
    import Pathfind from './Pathfind.svelte';

    //icons
    import FaSortAlphaDown from 'svelte-icons/fa/FaSortAlphaDown.svelte';
    import IoMdInformationCircleOutline from 'svelte-icons/io/IoMdInformationCircleOutline.svelte';
    import IoIosCheckboxOutline from 'svelte-icons/io/IoIosCheckboxOutline.svelte';
    import GiMaze from 'svelte-icons/gi/GiMaze.svelte';

    //vars
    let about: boolean = false;
    let todo: boolean = false;
    let sort: boolean = false;
    let pathfind: boolean = false;

    //firebase init and db
    

    //login logic
    import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
    const app = initializeApp(firebaseConfig);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    export let user;

    function login () {
        signInWithPopup(auth, provider).then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            user = result.user
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
</script>

{#if user != undefined}
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
            <Todo userId={user.uid}/>
        {:else if sort}
            <Sort />
        {:else if pathfind}
            <Pathfind />
        {:else}
            <About />
        {/if}
    </div>
{:else}
    <button on:click={login}>Log In or Sign Up</button>
{/if}