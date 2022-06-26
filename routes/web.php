<?php

use App\Models\Upload;
use Illuminate\Support\Facades\Route;
use Intervention\Image\Facades\Image;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UploadController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [HomeController::class, 'index']);
Route::get('/upload', [UploadController::class, 'index']);
Route::post('/upload', [UploadController::class, 'store']);
Route::post('/publish', [UploadController::class, 'publish']);


Route::get('test', function(){

    $img3 = Image::make(public_path('/tmp/zxxsgD1rcY5xblvENsUr0eGGLOtwysdK0WhuSz84.jpg'))->resize(600, null, function ($constraint) {
        $constraint->aspectRatio();
        $constraint->upsize();
    })->save('image3.jpg', 100);

    dd ($img3);
});