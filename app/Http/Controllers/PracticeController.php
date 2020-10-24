<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\PracticeCourse;
use App\PracticeCategory;
use Illuminate\Http\Request;

class PracticeController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $settings = authUser()->settings()->first();
            if ($settings && $settings->preferences->add_practice_questions->enabled) {
                return $next($request);
            }
            return backward();
        });
    }

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
        $course->load('years');
        return Inertia::render("Dashboard/practice/courses/", ["course" => $course]);
    }
}
