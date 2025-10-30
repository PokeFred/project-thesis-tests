<script lang="ts">
    import type { GameResultAccordion } from "./GameResultAccordion"
    import Accordion from "./GameResultAccordion.svelte"

    const accordion: GameResultAccordion = [
        { type: "question", success: true, question: "(a) Hey...", answers: [
            { type: "paragraph", content: "Hello World (1)" },
            { type: "image", src: "https://placehold.co/100x100.png", alt: "", caption: "ttt" },
            { type: "spacing" },
            { type: "paragraph", content: "Hello World (2)" }
        ] },
        { type: "seperator" },
        { type: "question", success: false, question: "(b) Die Haupt...", answers: [] },
        { type: "seperator" },
        { type: "question", success: true, question: "(c) Der Markt...", answers: [] }
    ]
</script>

<div class="w-full h-auto text-black border border-black rounded-xl p-4">
    <div class="text-xl font-bold underline text-center">Rechtliches</div>
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores consequuntur enim officia ipsa sed deleniti dolore, quibusdam repellat quos deserunt itaque eos fugiat, voluptas reiciendis iure beatae atque aliquid error.</div>
    <br />
    <Accordion accordion={accordion} />
</div>
