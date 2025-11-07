<script lang="ts">
    import "../app.css"
    import "@fontsource-variable/nunito"
    import type { LayoutProps } from "./$types"

    let { children }: LayoutProps = $props()
</script>

<div class="w-screen h-auto min-h-screen bg-[#30114F]">
    <div class="w-full h-auto bg-[#FFA099]">
        <div class="mx-auto w-full max-w-xl h-auto flex justify-center items-center px-4 py-2">
            <span class="text-xl font-bold text-[#30114F]">Proof of Concept One (GPS)</span>
        </div>
    </div>
    <div class="mx-auto w-full max-w-md h-auto p-4">
        {@render children()}
    </div>
</div>
