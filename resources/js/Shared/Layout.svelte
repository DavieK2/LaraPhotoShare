<script>
    import TopBar from './TopBar.svelte';
    export let showFixedNav = true;
</script>

<div class="relative min-h-screen flex flex-col">
    
    { #if showFixedNav === true }
        <TopBar />
    { /if }

    <slot></slot>
</div>