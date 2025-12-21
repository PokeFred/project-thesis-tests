<script lang="ts">
    import Icon from "svelte-awesome"
    import { faAngleUp } from "@fortawesome/free-solid-svg-icons/faAngleUp"
</script>

<button onclick={() => window.scrollTo({ top: 0, behavior: "smooth" })} class="my-7.5 ml-auto mr-3.5 w-8 h-8 text-primary bg-secondary rounded-full flex justify-center items-center cursor-pointer touch-manipulation active:scale-95">
    <Icon data={faAngleUp} class="w-6 h-6" />
</button>