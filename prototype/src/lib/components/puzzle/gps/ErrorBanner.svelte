<script lang="ts">
    let { message }: { message: string } = $props()
    const rgb: string = `255, 0, 0`
</script>

<div class="mx-auto w-full max-w-xs h-auto border-2 rounded-xl px-8 py-2 striped-background" style={`--base-rgb: ${rgb};`}>
    <div class="w-full h-auto text-base font-semibold underline text-center">Fehler</div>
    <div class="w-full h-auto text-sm font-semibold text-center text-balance">{message}</div>
</div>

<style>
    div.striped-background {
        --color-primary: rgba(var(--base-rgb), 1.0);
        --color-secondary: rgba(var(--base-rgb), 0.40);
        --color-tertiary: rgba(var(--base-rgb), 0.25);

        border-color: var(--color-primary);
        background-image: repeating-linear-gradient(
            -45deg,
            var(--color-secondary),
            var(--color-secondary) 10px,
            var(--color-tertiary) 10px,
            var(--color-tertiary) 20px
        );
    }
</style>
