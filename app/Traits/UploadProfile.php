<?php

namespace App\Traits;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

trait UploadProfile
{
    /**
     * Uploads user Profile Picture and returns the Image Name
     * @param {string} image_64 base64 string for image file 
     */
    public function storeProfile($image_64)
    {
        $extension = explode('/', explode(':', substr($image_64, 0, strpos($image_64, ';')))[1])[1];
        $replace = substr($image_64, 0, strpos($image_64, ',') + 1);
        //? find substring for replace here eg: data:image/png;base64,
        $image = str_replace($replace, '', $image_64);
        $image = str_replace(' ', '+', $image);
        $imageName = time() . Str::random(10) . '.' . $extension;
        Storage::disk('profile')->put("image/$imageName", base64_decode($image));
        return $imageName;
    }
}
