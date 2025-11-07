<script lang="ts">
    let { message }: { message: string } = $props()
</script>

<div class="mx-auto w-full max-w-xs h-auto border-2 border-red-500 rounded-xl px-8 py-2 error-striped-background">
    <div class="w-full h-auto text-base font-semibold underline text-center">Error</div>
    <div class="w-full h-auto text-sm font-semibold text-center text-balance">{message}</div>
</div>

<style>
    div.error-striped-background {
        --error-stripe-light: rgba(255, 0, 0, 0.30);
        --error-stripe-dark: rgba(255, 0, 0, 0.20);

        background-image: repeating-linear-gradient(
            -45deg,
            var(--error-stripe-light),
            var(--error-stripe-light) 10px,
            var(--error-stripe-dark) 10px,
            var(--error-stripe-dark) 20px
        );
    }
</style>
