<script>
    export let disabled;
</script>

<button on:click { disabled } class="bg-[#ef6d40] text-white px-8 py-3 rounded-full text-base disabled:bg-[#eda289] disabled:cursor-not-allowed">
    <slot></slot>
</button>
