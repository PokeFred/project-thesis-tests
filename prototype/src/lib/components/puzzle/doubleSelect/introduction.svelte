<script lang="ts">
    import Icon from "svelte-awesome"
    import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons/faCircleQuestion"
    import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus"
    import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus"
    import type { Introduction } from "./index"

    let { data }: { data: Introduction } = $props()
    let open: boolean = $state<boolean>(false)

</script>

<div class="mt-3 w-full h-auto text-lg font-bold text-left px-3">{data.text}</div>
<div class="mb-3 w-full h-auto grid grid-cols-1 gap-4">
    <hr class="border-2">
    <details bind:open={open}>
        <summary class="w-full h-auto flex justify-between items-center cursor-pointer px-3">
            <span class="font-bold"><Icon data={faCircleQuestion} /> ?</span>
            <Icon data={open ? faMinus : faPlus} />
        </summary>
        <div class="px-6 pt-1">lorem ipsum...</div>
    </details>
    <hr class="border-2">
</div>
