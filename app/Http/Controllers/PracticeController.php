<?php

namespace App\Http\Controllers;

use App\Question;
use Inertia\Inertia;
use App\PracticeYear;
use App\PracticeCourse;
use App\ObjectiveOption;
use App\PracticeCategory;
use Illuminate\Http\Request;
use App\Services\QuestionService;
use App\Http\Requests\QuestionRequest;
use App\Http\Requests\SolutionRequest;
use App\Services\ObjectiveOptionService;
use App\Services\SolutionService;

class PracticeController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(QuestionService $QuestionService, ObjectiveOptionService $objectiveOptionService, SolutionService $solutionService)
    {
        $this->QuestionService = $QuestionService;
        $this->objectiveOptionService = $objectiveOptionService;
        $this->solutionService = $solutionService;
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

    public function storeQuestion(QuestionRequest $request)
    {
        $this->QuestionService->store($request);
        return redirect()->back()->with('success', "Question Added successfully");
    }
    public function updateQuestion(QuestionRequest $request)
    {
        $this->QuestionService->update($request);
        return redirect()->back()->with('success', "Question Updated successfully");
    }
    public function destroyQuestion(Question $question)
    {
        $this->QuestionService->destroy($question);
        return redirect()->back()->with('success', "Question Deleted successfully");
    }

    public function importQuestion(Request $request)
    {
        $message = $this->QuestionService->import($request);
        return redirect()->back()->with('success',  "$message Question(s) Imported successfully");
    }

    public function storeOption(Question $question, Request $request)
    {
        $this->objectiveOptionService->store($question, $request);
        return redirect()->back()->with('success', "Option added Successfully");
    }

    public function correctOption(Question $question, ObjectiveOption $option)
    {
        $message = $this->objectiveOptionService->correctOption($question, $option);
        return redirect()->back()->with($message[0], $message[1]);
    }
    public function destroyOption(ObjectiveOption $option)
    {
        $message = $this->objectiveOptionService->destroy($option);
        return redirect()->back()->with('success', "Option deleted Successfully");
    }

    public function saveSolution(Question $question, SolutionRequest $request)
    {
        $this->solutionService->save($question, $request);
        return redirect()->back()->with('success', "Solution Saved Successfully");
    }
}
