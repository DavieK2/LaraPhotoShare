<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Upload;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $users = User::all();
        $photos = $users->flatMap(fn($user) => $user->getMedia('images'));
        $smallUrls = $photos->map(fn($photo) => $photo->getUrl('small'));
        $mediumUrls = $photos->map(fn($photo) => $photo->getUrl('medium'));
        $largeUrls = $photos->map(fn($photo) => $photo->getUrl('large'));
        
        return inertia('User/Home', [
            'smallUrls' => $smallUrls,
            'mediumUrls' => $mediumUrls,
            'largeUrls' => $largeUrls,
            'photos' => $photos
                        ->transform(function($photo){
                            return [
                                'name' => $photo->name
                            ];
                        })
        ]);
    }
}
