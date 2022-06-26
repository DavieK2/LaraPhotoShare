<script>
    export let placeholder;
    export let data;
</script>

<div class="flex flex-col w-full">
    <input bind:value={ data } class="border border-gray-500 w-full focus:outline-none py-4 px-3 rounded-xl text-sm font-light placeholder-gray-300" placeholder={ placeholder } type="text">
</div>