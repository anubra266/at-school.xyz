<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    public function general()
    {
        return Inertia::render('Dashboard/settings/');
    }
}
