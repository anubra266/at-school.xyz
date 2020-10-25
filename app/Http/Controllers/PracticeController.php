<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\PracticeYear;
use App\PracticeCourse;
use App\PracticeCategory;
use Illuminate\Http\Request;
use App\Services\QuestionService;

class PracticeController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(QuestionService $QuestionService)
    {
        $this->QuestionService = $QuestionService;
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
        $course->load(['years' => fn ($q) => $q->orderBy('year', 'asc')->withCount('questions')]);
        return Inertia::render("Dashboard/practice/courses/", ["course" => $course]);
    }

    public function showYear(PracticeCourse $course, PracticeYear $year)
    {
        $year->load(['questions.options', 'questions.solution']);
        $data =  ['course' => $course, 'year' => $year];
        return Inertia::render("Dashboard/practice/upload/index/", $data);
    }
}
