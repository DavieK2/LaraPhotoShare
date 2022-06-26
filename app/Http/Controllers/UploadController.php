<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Upload;
use Illuminate\Support\Facades\Validator;

class UploadController extends Controller
{

    public function index()
    {
        return Inertia::render('User/Upload', ['token' => csrf_token() ]);
    }

    public function store()
    {
        Validator::make( request()->all(), [
            'image' => 'required',
            'key' => 'required',
        ],   
        [
            'image.required' => 'Your file does not meet the minimum requirements',
            'key.required' => 'Your file does not meet the minimum requirements',

        ] )->validate();

        $image = request()->file('image');
        $key = request('key');
        $filename = $image->getClientOriginalName();
        $path = $image->store('tmp');

        User::find(1)->uploads()->create([

            'filename' => $filename,
            'key' => $key,
            'path' => $path

        ]);
        
        return response()->json(['message' => 'Upload Successful'], 200);
    }

    public function publish()
    {

        Validator::make(request()->all(), [
            'key' => 'required|exists:uploads',
        ], 
        [ 
            'key.required' => 'Upload Error. This file is not valid',
            'key.exists' => 'Upload Error. This file is not valid',

        ])->validate();

        try {

            $keys = request('key');
            $title = request('title');
            $location = request('location');
            $tags = request('tags');
    
            foreach($keys as $index => $key){
    
                $user = User::find(1);
    
                $image = Upload::firstWhere('key', $key);
                         
                $user->addMedia(public_path($image->path))
                    ->usingName(isset($title[$index]) ? $title[$index] : $image->filename )
                    ->withCustomProperties([
                        'location' => isset($location[$index]) ? $location[$index] : '', 
                        'tags' => isset($tags[$index]) ? $tags[$index] : ''])
                    ->toMediaCollection('images');
            }
           
            return redirect('/upload');

        } catch (\Throwable $th) {
            
            return redirect('/upload')->withErrors(['key' => 'There was a problem with the upload']);
        }
    }
}
