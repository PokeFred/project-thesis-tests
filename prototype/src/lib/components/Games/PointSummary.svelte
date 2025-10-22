<script lang="ts">
    let { descriptions, points }: { descriptions: string[]; points: number[] } = $props();
</script>

<!-- TODO: div zu ul -->
<section class="mb-5">
    <h4>Punkteübersicht:</h4>
    <div class="grid gap-1 grid-cols-[auto_auto]">
        {#each descriptions as description, i}
            <span class="w-full h-auto text-sm">{description}</span>
            <span class="place-self-center text-center h-auto text-sm">{points[i] >= 0 ? `+${points[i]}` : points[i]}</span>
        {/each}
    </div>

    <p class="my-4 w-full h-auto text-sm">
        Insgesammt Verdiente Punkte: {points.reduce((previous, current)=> previous + current)} 
    </p>
</section>