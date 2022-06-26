<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class Upload extends Model
{
    use HasFactory;

    protected $guarded = [];

   
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}