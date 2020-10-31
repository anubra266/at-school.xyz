<?php

namespace App\Http\Controllers;

use App\Events\PasswordHasBeenChanged;
use App\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Traits\UploadProfile;
use Illuminate\Support\Facades\Mail;
use App\Notifications\PasswordChange;
use App\Http\Requests\PasswordRequest;
use App\Notifications\ContributionPermit;
use App\Http\Requests\BasicSettingRequest;
use App\Http\Requests\ThemeSettingRequest;

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
        return backward()->with('success', 'Settings saved Successfully');
    }

    public function profile(Request $request)
    {
        authUser()->update(['profile_image' => $this->storeProfile($request->profile_image)]);
        return backward()->with('success', 'Profile picture updated Successfully');
    }

    public function fakeUpload()
    {
        //? fake Upload Route
    }
    public function theme(ThemeSettingRequest $request)
    {
        authUser()->settings()->updateOrCreate(['user_id' => authUser()->id], ['preferences->theme' => $request->validated()['theme']]);
        return backward()->with('success', 'Theme updated successfully');
    }

    public function password(PasswordRequest $request)
    {
        $request = $request->validated();
        authUser()->update(['password' => bcrypt($request['new_password'])]);
        authUser()->notify(new PasswordChange());


        // PasswordHasBeenChanged::dispatch();

        return backward()->with('success', 'Password updated successfully');
    }
    public function pQuestions(Request $request)
    {
        $request->validate(['recipent' => 'required|email']);
        $recipent = User::whereEmail($request->recipent)->first();

        if ($recipent && $recipent->email === authUser()->email) {
            return backward()->with('warning', "Come on! You can't permit yourself.");
        }
        $data = [
            'preferences->add_practice_questions->permitted' => true,
            'preferences->add_practice_questions->referrer' => authUser()->id
        ];
        $settings = $recipent->settings()->first();
        if ($recipent && !($settings && property_exists($settings->preferences, 'add_practice_questions') && $settings->preferences->add_practice_questions->permitted)) {
            $recipent->settings()->updateOrCreate(['user_id' => $recipent->id], $data);
            $recipent->notify(new ContributionPermit());
        }
        return backward()->with('success', 'User will be permitted if existing.');
    }

    public function pQuestionsStatus($toEnable)
    {
        $status = $toEnable === "true" ? true : false;
        authUser()->settings()->updateOrCreate(["user_id" => authUser()->id], ["preferences->add_practice_questions->enabled" => $status]);
        $action = $status ? "Enabled" : "Disabled";
        return backward()->with("success", "Contribution $action successfully.");
    }
}
