<script lang="ts">
    const arr: { title: string, data: any[] }[] = [
        { title: "1. Wer ist verantwortlich ?", data: [] },
        { title: "2. Was macht die App ?", data: [] },
        { title: "3. Welche Daten speichern wir ?", data: [] },
        { title: "4. Warum speichert die Anwendung diese Daten ?", data: [] },
        { title: "5. Nutzt die App deinen Standort ?", data: [] },
        { title: "6. Werden Daten an andere Firmen weitergegeben ?", data: [] },
        { title: "7. Externe Links (z. B. Google Maps)", data: [] },
        { title: "8. Serverdaten", data: [] },
        { title: "9. Wie lange werden Daten gespeichert ?", data: [] },
        { title: "10. Änderungen", data: ["Wenn wir die App technisch ändern, kann sich auch diese Erklärung ändern.", "Die aktuelle Version findest du jederzeit in der App."] }
    ]
</script>

<div class="w-full h-auto text-primary">
    <div class="w-full h-auto text-xl font-bold text-start">Datenschutzerklärung</div>
    <div class="mt-4 w-full h-auto grid grid-cols-1 gap-4">
        {#each arr as element}
            <hr />
            <div class="font-bold">{element.title}</div>
            {#each element.data as _element}
                <!-- <div>{_element}</div> -->
            {/each}
        {/each}
        <hr />
    </div>
</div>
