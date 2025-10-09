<script lang="ts">
    import { goto } from "$app/navigation"
    import { startGame } from "$stores/game"

    function start(): void {
        startGame()
        goto("/app")
    }
</script>

<img src="https://placehold.co/600x400.png" alt="" class="w-full h-auto rounded-xl" />
<div class="mt-3 mx-auto w-fit h-auto">
    <button onclick={start} class="w-full h-auto text-xl text-white bg-blue-500 rounded-xl cursor-pointer px-8">Spiel starten</button>
</div>
<div class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fuga quas. In soluta incidunt magni quae ut, neque voluptatibus fuga aut omnis distinctio quam ea nesciunt! Ipsa omnis itaque recusandae.</div>
