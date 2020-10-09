<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\ObjectiveQuestion;
use Illuminate\Http\Request;
use App\Services\ObjectiveQuestionService;
use App\Http\Requests\ObjectiveQuestionRequest;

class ObjectiveQuestionController extends Controller
{
    public function __construct(ObjectiveQuestionService $objectiveQuestionService)
    {
        $this->objectiveQuestionService = $objectiveQuestionService;
    }
    public function store(Classroom $classroom, ObjectiveQuestionRequest $request)
    {
        $this->objectiveQuestionService->store($request);
        return redirect()->back()->with('success', "Question Added successfully");
    }
    public function update(Classroom $classroom, ObjectiveQuestionRequest $request)
    {
        $this->objectiveQuestionService->update($request);
        return redirect()->back()->with('success', "Question Updated successfully");
    }
    public function destroy(Classroom $classroom, ObjectiveQuestion $question)
    {
        $this->objectiveQuestionService->destroy($question);
        return redirect()->back()->with('success', "Question Deleted successfully");
    }
}
