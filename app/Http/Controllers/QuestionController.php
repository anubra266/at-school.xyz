<?php

namespace App\Http\Controllers;

use App\Question;
use App\Classroom;
use Illuminate\Http\Request;
use App\Services\QuestionService;
use App\Http\Requests\QuestionRequest;

class QuestionController extends Controller
{
    public function __construct(QuestionService $QuestionService)
    {
        $this->QuestionService = $QuestionService;
    }
    public function store(Classroom $classroom, QuestionRequest $request)
    {
        $this->QuestionService->store($request);
        return redirect()->back()->with('success', "Question Added successfully");
    }
    public function update(Classroom $classroom, QuestionRequest $request)
    {
        $this->QuestionService->update($request);
        return redirect()->back()->with('success', "Question Updated successfully");
    }
    public function destroy(Classroom $classroom, Question $question)
    {
        $this->QuestionService->destroy($question);
        return redirect()->back()->with('success', "Question Deleted successfully");
    }

    public function import(Classroom $classroom, Request $request)
    {
        $message = $this->QuestionService->import($request);
        return redirect()->back()->with('success',  "$message Question(s) Imported successfully");
    }
}
