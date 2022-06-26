<script>
    import { Link } from "@inertiajs/inertia-svelte";
    export let className;
</script>

<Link href="/" class="flex-none" replace>
    <img class={ className } src="/images/afripik_white.png" alt="Afripik">
</Link>