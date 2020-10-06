<?php

namespace App\Http\Controllers;

use App\Http\Requests\BasicSettingRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function general()
    {
        return Inertia::render('Dashboard/settings/');
    }

    public function basic(BasicSettingRequest $request)
    {
        authUser()->update($request->validated());
        return redirect()->back()->with('success', 'Settings saved Successfully');
    }
}
