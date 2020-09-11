<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\Question;
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
}
