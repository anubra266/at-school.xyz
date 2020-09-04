<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\TheoryTest;
use Illuminate\Http\Request;
use App\Services\TheoryQuestionService;
use App\Http\Requests\TheoryQuestionRequest;

class TheoryQuestionController extends Controller
{
    public function __construct(TheoryQuestionService $theoryQuestionService)
    {
        $this->theoryQuestionService = $theoryQuestionService;
    }
    public function store(Classroom $classroom, TheoryTest $test, TheoryQuestionRequest $request)
    {
        $this->theoryQuestionService->store($test, $request);
        return redirect()->back()->with('success', "Question Added successfully😃");
    }
    public function update(Classroom $classroom, TheoryTest $test, TheoryQuestionRequest $request)
    {
        $this->theoryQuestionService->update($request);
        return redirect()->back()->with('success', "Question Updated successfully😃");
    }
}
