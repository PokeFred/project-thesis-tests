<script lang="ts">
    import Select from "$components/Select.svelte";
    
    function onchange(option: string): void {

    }

    let options: string[] = ["hallo", "1234"]
</script>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <Select {options} {onchange}/>  Dolores, beatae. Deleniti quis voluptate magnam debitis ex reiciendis ipsam cumque, laborum, quasi quidem, esse blanditiis. Omnis magni sequi est nostrum nihil?</p>

<div>
    <div>
        <Select {options} {onchange}/>
    </div>
    <div>

    </div>
</div>