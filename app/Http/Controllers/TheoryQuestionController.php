<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\TheoryTest;
use App\TheoryQuestion;
use Illuminate\Http\Request;
use App\Services\TheoryQuestionService;
use App\Http\Requests\TheoryQuestionRequest;

class TheoryQuestionController extends Controller
{
    public function __construct(TheoryQuestionService $theoryQuestionService)
    {
        $this->theoryQuestionService = $theoryQuestionService;
    }
    public function store(Classroom $classroom, TheoryQuestionRequest $request)
    {
        $this->theoryQuestionService->store($request);
        return redirect()->back()->with('success', "Question Added successfully");
    }
    public function update(Classroom $classroom, TheoryQuestionRequest $request)
    {
        $this->theoryQuestionService->update($request);
        return redirect()->back()->with('success', "Question Updated successfully");
    }
    public function destroy(Classroom $classroom, TheoryQuestion $question)
    {
        $this->theoryQuestionService->destroy($question);
        return redirect()->back()->with('success', "Question Deleted successfully");
    }
}
