<script lang="ts">
    import { Icon } from "svelte-awesome"
    import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"
    import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"

    let { question, answer }: { question: string, answer: string } = $props()
    let open: boolean = $state<boolean>(false)
</script>

<details bind:open={open} class="w-full h-auto">
    <summary class="w-full h-auto flex justify-between items-center cursor-pointer"><span class="font-bold">{question}</span> <Icon data={open ? faPlus : faMinus} /></summary>
    <div class="px-2 pt-1">{answer}</div>
</details>
