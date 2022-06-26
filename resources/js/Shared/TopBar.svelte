<script>
    import { fly } from 'svelte/transition';
    import { Link } from '@inertiajs/inertia-svelte';
    import Icon from './Icon.svelte';
    import Logo from './Logo.svelte';

    let transition = { transition:fly }

</script>


<div { transition } class="fixed top-0 flex flex-row items-center justify-between w-full h-20 bg-gray-800 px-8 z-50">
    <Logo className="h-10" />
    <div class="w-full mx-10">
        <input type="text" class="w-full rounded-lg py-3 px-6 focus:outline-none font-light placeholder-gray-400" placeholder="Search for free photos">
    </div>
    <div class="md:flex hidden flex-row space-x-10 items-center">
        <Link href="/" class="text-white hover:text-gray-300 transition">Explore</Link>
        <Link href="/notifications">
            <Icon name="notification" className="h-7 w-7 stroke-current text-white hover:text-gray-300" />
        </Link>
        <Link href="/profile">
            <Icon name="profile" className="h-7 w-7 fill-current text-white hover:text-gray-300" />
        </Link>
        <Link href="/upload" class="bg-[#ef6d40] text-white py-2 px-8 hover:bg-[#eb6335] rounded-md transition">Upload</Link> 
    </div>      
</div>

