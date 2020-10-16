<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Mail\PasswordChange;
use Illuminate\Http\Request;
use App\Traits\UploadProfile;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\PasswordRequest;
use App\Http\Requests\BasicSettingRequest;
use App\Http\Requests\ThemeSettingRequest;
use Stevebauman\Location\Facades\Location;

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

    public function fakeUpload()
    {
        //? fake Upload Route
    }
    public function theme(ThemeSettingRequest $request)
    {
        authUser()->settings()->updateOrCreate(['user_id' => authUser()->id], ['preferences->theme' => $request->validated()['theme']]);
        return redirect()->back()->with('success', 'Theme updated successfully');
    }

    public function password(PasswordRequest $request)
    {
        $request = $request->validated();
        authUser()->update(['password' => bcrypt($request['new_password'])]);
        Mail::to(authUser()->email)->send(new PasswordChange(authUser()));
        return redirect()->back()->with('success', 'Password updated successfully');
    }
}
