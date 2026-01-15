<script lang="ts">
    import type { GameInput, GameOutput } from "./index"
    import { onMount } from "svelte"

    let { data, setSubmitable }: { data: GameInput, setSubmitable: () => void } = $props()

    let output: GameOutput = { answers: [] }
    export function getSubmitData(): GameOutput { return output }

    export function getSubmitScore(): number {
        return output.answers
            .map((e, i): number => (e.isCorrect === data.answers[i].isCorrect) ? 1 : 0)
            .reduce((pre: number, cur: number): number => pre += cur)
    }

    onMount((): void => {
        setSubmitable()

        output = {
            answers: data.answers
        }
    })

    function select(event: HTMLInputElement, id: number) {
        output.answers[id].isCorrect = event.checked
    }
</script>

<div class="w-full h-auto border-y-2 border-secondary divide-y-2 divide-secondary flex flex-col">
    {#each data.answers as element, i}
        <label class="flex h-20 text-[18px] py-2 items-center font-medium">
            <input onchange={(event: Event): void => select(event.currentTarget as HTMLInputElement, i)} type="checkbox" class="appearance-none touch-manipulation shrink-0 grow-0 w-[32px] h-[32px] ml-[9px] mr-[25px] border-2 border-secondary rounded-full" />
            <span>{element.text}</span>
        </label>
    {/each}
</div>

<style>
    input[type="checkbox"] {
        background-color: inherit;
    }

    input[type="checkbox"]:checked {
        background-color: var(--color-secondary);
    }
</style>
