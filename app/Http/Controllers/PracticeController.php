<?php

namespace App\Http\Controllers;

use App\PracticeCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PracticeController extends Controller
{
    public function index()
    {
        $settings = authUser()->settings()->first();
        $user_role = authUser()->initial_role;
        $path = (in_array($user_role, ["practicist", "student"])) ? 'student' : 'educator';
        if ($path === 'student' || ($settings && $settings->preferences->add_practice_questions->enabled)) {
            return Inertia::render("Dashboard/practice/$path/", ["categories" => PracticeCategory::all()]);
        }
        return redirect()->route('home');
    }
}
