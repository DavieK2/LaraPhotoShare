<script>
    import { fly } from 'svelte/transition';
    import Dropzone from 'svelte-file-dropzone';
    import { page } from '@inertiajs/inertia-svelte';
    import { Inertia } from '@inertiajs/inertia';
    import Button from '../../Shared/Button.svelte';
    import Layout from '../../Shared/Layout.svelte';


    export let errors = {}
    let images = [];
    let disabled = true;
    let pageError = false;
    let showFixedNav = true;


    const uniqueID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace( /[xy]/g , function(c) {
            let rnd = Math.random() * 16 | 0;
            let v = c === 'x' ? rnd : (rnd&0x3 | 0x8) ;
            return v.toString(16);
        });
    }

    function handleFilesSelect(e, imageCount) {

        const { acceptedFiles } = e.detail;

        let validImages = images.filter( image => image.isCancelled === false);

        for ( let index = 0; index < acceptedFiles.length; index ++ ) {

            if( index >= 5 || validImages.length + index  >= 5 ){

                error = "You can have a maximum of five uploads per time";
                return
            }
            
            images.push({ 
                imageFile: acceptedFiles[index], 
                type: acceptedFiles[index].type.split('/')[0],  
                percentage: 0, 
                status: false, 
                error: false, 
                key: uniqueID() , 
                title: "" , 
                tags: [], 
                location: "", 
                isCancelled:false 
            });

            if( images[index+imageCount].imageFile.type.split('/')[0] !== 'image' ){

                images[index+imageCount] = { imageFile: acceptedFiles[index], percentage: 0 , error: "Your upload should be an image", isCancelled:false }
                checkValidImage();
            }

            else if( images[index+imageCount].imageFile.size < 5 * (1024 * 1024) ){

                images[index+imageCount] = { imageFile: acceptedFiles[index], percentage: 0 , error: "Your upload size should be at least 5MB", isCancelled:false  }
                checkValidImage();
            }

            else if( images[index+imageCount].imageFile.size > 10 * (1024 * 1024) ){

                images[index+imageCount] = { imageFile: acceptedFiles[index], percentage: 0 , error: "Your upload size should not be more than 10MB", isCancelled:false  }
                checkValidImage();
            }

            else{

                let formData = new FormData()
            
                formData.append('image', images[index+imageCount].imageFile);
                formData.append('key', images[index+imageCount].key);
                
                let xhr = new XMLHttpRequest();
                xhr.open('POST', '/upload');
                xhr.setRequestHeader('X-CSRF-TOKEN', $page.props.token);

                xhr.upload.onprogress = (e) => {

                    disabled = true;
                    images[index+imageCount].progress = `width: ${ 100 -  (e.loaded * 100) / e.total  }%`;
                 
                    if( images[index+imageCount].isCancelled === true ) {
                        xhr.abort();
                    }
                }

                xhr.onload = () => {

                    if(xhr.status !== 200 ){

                        disabled = true;
                        images[index+imageCount].error = 'Upload error';

                    }else{

                        images[index+imageCount].status = 'Completed';
                        checkValidImage();
                    }
                }

                xhr.onerror = () => {

                    images[index+imageCount].error = 'Upload error';
                }

                xhr.send(formData);
            }
        }   
    }


    const createTags = (e, index, previousTagLength) => {

        let value = e.target.value;
       
        if(value.search(',') > 0){

            value = value.split(',')[0];
             
            if(images[index].tags.includes(value)){

                e.target.value = "";
            }

            else {

                images[index].tags = [...images[index].tags, value]

            }
        }

        if(images[index].tags.length > previousTagLength ){

            e.target.value = "";
        }
    }

    const removeTag = (imageIndex, tagIndex) => {

        images[imageIndex].tags.splice(tagIndex, 1);
        images = images

    }

    const checkValidImage = () => {

        let invalidImages = images.filter( image =>  image.error && image.isCancelled === false);
        let validImages = images.filter( image =>   image.error === false && image.isCancelled === false);

        if(validImages.length > 0 && invalidImages.length < 1){

            disabled = false;
        }
        
        else {

            disabled = true;
        }          
    }

    const removeImage = (index) => {

        images[index].isCancelled = true;
        checkValidImage();    
        
    }


    const publish = () => {

        disabled = true;

        let data = { key: [], title: [], location: [], tags: [] };
        let validImages = images.filter( image =>   image.error === false && image.isCancelled === false);

        validImages.forEach( validImage => {

            data.key.push(validImage.key);
            data.title.push(validImage.title);
            data.location.push(validImage.location);
            data.tags.push(validImage.tags);

        });

        Inertia.post('/publish', data, {
            forceFormData: true,
        });

        images = [];
        
    }

    $: {
        
        if(errors.key){
            pageError = true;
            setTimeout(() => pageError = false, 10000)
        }
    }

</script>



<Layout { showFixedNav }>
    <div class="relative flex flex-col items-center px-6 min-h-screen bg-white z-10">
        <div class="flex flex-col items-center pt-32 pb-10 h-full">
            <h4 class="text-2xl font-semibold text-gray-800">Upload Your Photos</h4>
            <ul class="mt-8 max-w-xl text-sm space-y-3 list-disc list-outside text-gray-500 font-light">
                <li>Your uploads will be distributed for free under the Afripik license. Learn more</li>
                <li>To increase the chance of being featured, please ensure that your submissions meet our guidelines.</li>
                <li> We'll review your submission. If it gets selected, you will receive an email notification and your content will be featured in our search.</li>
            </ul>
        </div>
    
        <div class="flex flex-row w-full max-w-[46rem]">
            <Dropzone on:drop={ (e) => handleFilesSelect(e, images.length) } 
                accept={ ['image/*'] } 
                disableDefaultStyles="true" 
                containerClasses="w-full flex space-x-3 border-dashed border-2 border-gray-200 py-8 px-5 justify-center items-center rounded-xl bg-gray-100 focus:border-[#ef6d40] focus:outline-none"
                >
    
                <button class="bg-[#ef6d40] text-white py-3 px-6 rounded-xl text-sm">Browse Images</button>
                <p class="text-sm text-gray-400 font-light">or Drag and drop them here</p>
            </Dropzone>
        </div>
    
        <div class="pt-16 pb-32 flex flex-col w-full max-w-[46rem] space-y-10">
            { #if images.length > 0 }
                { #each images as item, index }
                    { #if item.error && item.isCancelled == false }
    
                        <div transition:fly="{{ y: 200, duration: 500 }}" class="relative w-80 h-80 bg-gray-200 rounded-xl flex-shrink-0 overflow-hidden">
                            <img src={ URL.createObjectURL(item.imageFile) } class="object-cover w-full h-full" alt="">
                            <button on:click={ () => removeImage(index) } class="absolute flex items-center justify-center bg-red-500 h-5 w-5 rounded-xl top-4 right-4 text-white">
                                <span class="text-xl">&times;</span>
                            </button>
                            <div class="absolute bottom-0 text-xs text-center font-light text-gray-50 bg-red-500 p-2 w-80">{ item.error }</div>
                        </div>
    
                    { :else if item.isCancelled == false }
    
                        <div transition:fly="{{ y: 200, duration: 500 }}" class="flex flex-row w-full items-center space-x-5">
                            <div class="relative w-80 h-80 bg-gray-200 rounded-xl flex-shrink-0 overflow-hidden">
                                <img src={ URL.createObjectURL(item.imageFile) } class="object-cover w-full h-full" alt={ item.imageFile.name }>
                                <div class="absolute inset-0 bg-black bg-opacity-50" style="{ item.progress }"></div>
                                <button on:click={ () => removeImage(index) } class="absolute flex items-center justify-center bg-red-500 h-5 w-5 rounded-xl top-4 right-4 text-white">
                                    <span class="text-xl">&times;</span>
                                </button>
                                { #if item.status }
                                    <div class="absolute bottom-0 text-xs text-center font-light text-gray-50 bg-green-500 p-2 w-80">{ item.status }</div>                   
                                { :else if item.error}
                                    <div class="absolute bottom-0 text-xs text-center font-light text-gray-50 bg-red-500 p-2 w-80">{ item.error }</div>
                                { /if }
                            </div>
                
                            <div class="flex flex-col w-full space-y-6">
                                <div class="flex flex-col w-full">
                                    <input bind:value={ item.title } class="border border-gray-500 w-full focus:outline-none py-4 px-3 rounded-xl text-sm font-light placeholder-gray-300" placeholder="Enter a Title for your picture (Optional)"  type="text">
                                </div>
                                <div class="flex flex-col w-full">
                                    <input bind:value={ item.location } class="border border-gray-500 w-full focus:outline-none py-4 px-3 rounded-xl text-sm font-light placeholder-gray-300" placeholder="Enter a Location for your picture (Optional)"  type="text">
                                </div>
                                <ul class="scrollbar flex flex-wrap items-center px-3 py-2 text-sm space-x-2 border border-gray-500 rounded-xl max-h-36 overflow-y-auto">
                                    { #each item.tags as tag, tagIndex }
                                        <li class="flex flex-row items-center mt-1 ml-2 bg-gray-200 rounded-full px-3 py-2 space-x-1">
                                            <span>{ tag }</span>
                                            <button on:click={ () => removeTag(index, tagIndex) }>&times;</button>
                                        </li>
                                    { /each }
                                    <input on:input={ (e) => createTags(e, index, item.tags.length) } class="mt-1 focus:outline-none text-sm placeholder-gray-300  py-2  font-light" type="text" placeholder="Enter tags (Optional)">
                                </ul>
                            </div>
                        </div>
                    { /if }
                { /each }
            {/if}
        </div>
      
        <div class="fixed flex flex-col items-center justify-center bottom-0 py-5 right-0 left-0 border-t border-gray-200 bg-white">
            { #if errors.key }  
                <Button { disabled } on:click={ publish }>Publish</Button>
            {:else }
                <Button { disabled } on:click={ publish }>Publish</Button>
            { /if } 
        </div>

        { #if pageError }
            <div class="absolute right-4 top-0 mt-24 text-white rounded-xl px-4 py-2 text-sm" class:bg-red-500={ errors }>
               { errors.key }
            </div>
        { /if }
    </div>
</Layout>



<style>
    .scrollbar::-webkit-scrollbar{
        width: 6px;
        padding: 6px;
    }

    .scrollbar::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0);
        border-radius: 10px;
    }

    .scrollbar::-webkit-scrollbar-thumb {
        background-color: #00000000;
        border-radius: 10px;
        height: 6rem;
    }
</style>