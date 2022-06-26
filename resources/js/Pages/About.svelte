<script>

    let count = 1;

    const inc = () => count ++;

</script>

<div class="min-h-screen bg-gray-500">
    <span>{ count }</span>
    <button on:click={inc}>Click Me</button>
</div>