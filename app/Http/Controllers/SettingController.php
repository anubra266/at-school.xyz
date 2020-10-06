<?php

namespace App\Http\Controllers;

use App\Http\Requests\BasicSettingRequest;
use Illuminate\Http\Request;
use App\Traits\UploadProfile;
use Inertia\Inertia;

class SettingController extends Controller
{
    use UploadProfile;

    public function general()
    {
        return Inertia::render('Dashboard/settings/');
    }

    public function basic(BasicSettingRequest $request)
    {
        authUser()->update($request->validated());
        return redirect()->back()->with('success', 'Settings saved Successfully');
    }

    public function profile(Request $request)
    {
        authUser()->update(['profile_image' => $this->storeProfile($request->profile_image)]);
        return redirect()->back()->with('success', 'Profile picture updated Successfully');
    }
}
