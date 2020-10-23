<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\PracticeCourse;
use App\PracticeCategory;
use Illuminate\Http\Request;

class PracticeController extends Controller
{
    public function index()
    {
        $settings = authUser()->settings()->first();
        $user_role = authUser()->initial_role;
        $path = $user_role === "student" ? 'student' : 'educator';
        $categories = PracticeCategory::all()->load('courses');
        if ($path === 'student' || ($settings && $settings->preferences->add_practice_questions->enabled)) {
            return Inertia::render("Dashboard/practice/$path/", ["categories" => $categories]);
        }
        return redirect()->route('home');
    }

    public function showCourse(PracticeCourse $course)
    {
        dd($course);
    }
}
