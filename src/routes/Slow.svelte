<script>
    let arr = [];
    let timeTaken, d, startTime, endTime, completed = false, elWidth = 1;
    let screenWidth = window.innerWidth-50;

    function reload() {
        location.reload();
        return false;
    }

        
    async function bubbleSort() {
        d = new Date();
        startTime = d.getTime()/1000;
        
        let len = arr.length;
        for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j+1]) {
            let tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
            await new Promise((r) => setTimeout(r, 1));
            } 
        }
        }
        d = new Date();
        endTime = d.getTime()/1000;
        timeTaken = endTime - startTime;
        completed = true;
    }

    async function insertionSort() {
        d = new Date();
        startTime = d.getTime()/1000;
        
        for (let i = 1; i < arr.length; i++) {
        // First, choose the element at index 1
        let current = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
            await new Promise((r) => setTimeout(r, 1));
        }
        arr[j + 1] = current;
        }
        d = new Date();
        endTime = d.getTime()/1000;
        timeTaken = endTime - startTime;
        completed = true;
    }

    async function gnomeSort() {
        d = new Date();
        startTime = d.getTime()/1000;
        
        for (var i = 1; i < arr.length; i++) {
            if (arr[i-1] > arr[i]) {
            for( ; i > 0 && arr[i-1] > arr[i]; i--) {
                var t = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = t;
                await new Promise((r) => setTimeout(r, 1));
            }
            }
        }
    d = new Date();
    endTime = d.getTime()/1000;
    timeTaken = endTime-startTime;
    completed = true;
    }

    async function selectionSort() {
        d = new Date();
        startTime = d.getTime()/1000;
        
        let n = arr.length;
            
        for(let i = 0; i < n; i++) {
            let min = i;
            for(let j = i+1; j < n; j++){
                if(arr[j] < arr[min]) {
                    min=j; 
                }
            }
            if (min != i) {
                let tmp = arr[i]; 
                arr[i] = arr[min];
                arr[min] = tmp;
                await new Promise((r) => setTimeout(r, 1));
            }
        }
        d = new Date();
        endTime = d.getTime()/1000;
        timeTaken = endTime-startTime;
        completed = true;
    }

    async function shellSort() {
        d = new Date();
        startTime = d.getTime()/1000;

        let n = arr.length;

        for (let gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2))	{
            for (let i = gap; i < n; i += 1)  {
                let temp = arr[i];
                
                let j;
                for (j = i; j >= gap && arr[j-gap] > temp; j-=gap)  {
                    arr[j] = arr[j-gap];
                }

                arr[j] = temp;
                await new Promise((r) => setTimeout(r, 1));
            }
        }
        d = new Date();
        endTime = d.getTime()/1000;
        timeTaken = endTime-startTime;
        completed = true;
    }

    async function flashSort() {
        d = new Date();
        startTime = d.getTime()/1000;
        
        var max = 0, min = arr[0];
        var n = arr.length;
        var m = ~~(0.45 * n);
        var l = new Array(m);
    
        for (var i = 1; i < n; ++i) {
            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > arr[max]) {
                max = i;
            }
        }
    
        if (min === arr[max]) {
            return arr;
        }
    
        var c1 = (m - 1) / (arr[max] - min);
    
    
        for (var k = 0; k < m; k++) {
            l[k] = 0;
        }
        for (var j = 0; j < n; ++j) {
            k = ~~(c1 * (arr[j] - min));
            ++l[k];
        }
    
        for (var p = 1; p < m; ++p) {
            l[p] = l[p] + l[p - 1];
        }
    
        var hold = arr[max];
        arr[max] = arr[0];
        arr[0] = hold;
    
        //permutation
        var move = 0, t, flash;
        j = 0; 
        k = m - 1;
    
        while (move < (n - 1)) {
            while (j > (l[k] - 1)) {
                ++j;
                k = ~~(c1 * (arr[j] - min));
            }
            if (k < 0) break;
            flash = arr[j];
            while (j !== l[k]) {
                k = ~~(c1 * (flash - min));
                hold = arr[t = --l[k]];
                arr[t] = flash;
                flash = hold;
                ++move;
                await new Promise((r) => setTimeout(r, 0.1));
            }
        }
    
        //insertion
        for (j = 1; j < n; j++) {
            hold = arr[j];
            i = j - 1;
            while (i >= 0 && arr[i] > hold) {
                arr[i + 1] = arr[i--];
            }
            arr[i + 1] = hold;
        }
        d = new Date();
        endTime = d.getTime()/1000;
        timeTaken = endTime-startTime;
        completed = true;
    }

    function shuffle() {
        completed = false;
        arr = [];
        for (let i = 1; i < screenWidth; i++) {
            let num = i/12;
            arr.push(num);
        }

        console.log(arr, Math.max(...arr), screenWidth/100)
        let currentIndex = arr.length,  randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }

    }
    
    shuffle()
</script>

<main>
    <button id="shuffle" on:click={reload}>Refresh</button>
    <button id="shuffle" on:click={shuffle}>Shuffle</button>
    <button on:click={bubbleSort}>Bubble Sort</button>
    <button on:click={insertionSort}>Insertion Sort</button>
    <button on:click={gnomeSort}>Gnome Sort</button>
    <button on:click={selectionSort}>Selection Sort</button>
    <button on:click={shellSort}>Shell Sort</button>
    <button on:click={flashSort}>Flash Sort</button>
</main>
<br>

{#each arr as el, i}
    {#if completed}
        <div id={i} style="position: relative;height: {el * 5}px; width: {elWidth}px; background: #52D452;" />
    {:else}
        <div id={i} style="position: relative;height: {el * 5}px; width: {elWidth}px; background: #eeeeee;" />
    {/if}
{/each}
<br>

<input type="number" placeholder="Number of elements" bind:value={screenWidth} on:change={shuffle}>
<input type="number" placeholder="Width of elements" bind:value={elWidth} on:change={shuffle}>

<h2>It took: {timeTaken} seconds to sort {screenWidth} elements</h2>