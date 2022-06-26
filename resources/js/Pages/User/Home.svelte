

<script>
    import Layout from '../../Shared/Layout.svelte';
    import { Link, page } from '@inertiajs/inertia-svelte';
    import Logo from '../../Shared/Logo.svelte';
    import viewport from '../../Helpers/viewPortAction.js'
    import Colcade from '../../../../node_modules/colcade/colcade'

    let showFixedNav = false;
    let photos = $page.props.photos;
    let largePhoto = $page.props.largeUrls;
    let mediumPhoto = $page.props.mediumUrls;
    let smallPhoto = $page.props.smallUrls;


    const initColc = (e) => {
     
        const colc = new Colcade( e.target, {
        columns: '.grid-col',
        items: '.grid-item'
        });
        
    }

    

</script>


<Layout { showFixedNav } >
    <header class="h-full w-auto bg-gray-800 pb-44 relative before:absolute before:inset-0 before:bg-black/50" style="background-image: url(); background-size: cover;"> 
        <nav class="relative flex flex-row items-center justify-between w-full h-20 px-6 md:px-8 py-8 text-white ">
            <Logo className="h-10" />
           
            <svg xmlns="http://www.w3.org/2000/svg" class="md:hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ffff">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        
            <div class="hidden md:flex">
                <div class="flex flex-row space-x-10 text-base items-center">
                    <div class="space-x-8">
                        <Link href="#" class="hover:text-gray-300 ">Explore</Link>
                        <Link class="px-4 py-2 bg-transparent border border-white text-center rounded-md transition duration-200 ease-in-out hover:bg-white hover:text-gray-800 text-sm" href="/upload">Upload A Photo</Link>
                    </div>
        
                    <div class="space-x-4 border-l border-white">
                        <Link class="ml-10 mr-6 hover:text-gray-300 " href="/login">Login</Link>
                        <Link href="/" class="px-8 py-2 bg-[#f46f40] text-center rounded-md transition duration-200 ease-in-out hover:bg-[#eb6335]">Sign Up</Link>
                    </div>
                    
                </div> 
            </div>
        </nav>
        <div class="relative flex flex-col justify-center items-center px-6 max-w-3xl mx-auto pt-36">
            <h1 class="md:text-4xl text-3xl font-bold mb-6 text-white">The best free stock photos shared by talented creators.</h1>
            
            <form   use:viewport
                    on:enterViewport={ () => showFixedNav = false }
                    on:exitViewport={ () => showFixedNav = true }
                    class="relative flex flex-row w-full">

                <input class="w-full md:py-4 py-3 px-4 rounded-l-lg bg-white placeholder-gray-300 text-base focus:outline-none focus:border-transparent" placeholder="Search for free photos">
                
                <button class="bg-white rounded-r-lg pr-4 -ml-2 focus:outline-none focus:border-transparent">
                    <svg class="fill-current text-gray-500 h-7 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                </button>

                <!-- <div class="absolute flex flex-col inset-0 top-10 border-t border-gray-200 rounded-b-lg bg-white h-40 py-8">
                    <div class="px-4 text-gray-600">
                        <h6 class="text-xs font-medium">Trending Photo Categories</h6>
                        <div class="grid grid-cols-3 gap-4 mt-5">
                            <div class="h-16 w-full bg-gray-300 rounded-xl"></div>
                            <div class="h-16 w-full bg-gray-300 rounded-xl"></div>
                            <div class="h-16 w-full bg-gray-300 rounded-xl"></div>
                        </div>
                    </div>
                </div> -->
            </form>


            <!-- <div class="flex flex-row flex-wrap space-x-4 text-white text-xs md:text-sm mt-3">
                <div>Suggested:</div>
                <a  href="#">Culture</a>
                <a  href="#">Tradition</a>
                <a  href="#">Clothes</a>
                <a  href="#">Fabrics</a>
            </div> -->
        </div>
    </header>

    <div class="w-full px-4 lg:px-8 py-10">
        <div use:viewport on:enterViewport={ (e) => initColc(e) } class="grids">
            <!-- columns -->
            <div class="grid-col grid-col--1"></div>
            <div class="grid-col grid-col--2"></div>
            <div class="grid-col grid-col--3"></div>
    
            <!-- items -->
           { #each photos as photo, index (photo.id)}
                <div class="grid-item"> 
                    <img srcset={ largePhoto[index]+' 1100w,' + mediumPhoto[index]+' 700w,' + smallPhoto[index]+' 500w'  }
                    src={ largePhoto[index] } alt={ photo.name } class="rounded-lg">  
                </div>
           { /each }
    
          </div>
    </div>
</Layout>

<style>
    .grids {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }

    .grid-item {
        padding: .2em;
    }

    .grid-col {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
    }

    /* 2 columns by default, hide columns 2 & 3 */
    
    .grid-col--3 {
        display: none
    }


    /* 4 columns at large size */
    @media (min-width: 1080px) {
        .grid-col--3 {
            display: block;
        }

        .grid-item {
            padding: .5em;
        }
    }
</style>