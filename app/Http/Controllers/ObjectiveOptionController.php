<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\ObjectiveOption;
use App\ObjectiveQuestion;
use Illuminate\Http\Request;
use App\Services\ObjectiveOptionService;

class ObjectiveOptionController extends Controller
{
    public function __construct(ObjectiveOptionService $objectiveOptionService)
    {
        $this->objectiveOptionService = $objectiveOptionService;
    }

    public function store(Classroom $classroom, ObjectiveQuestion $question, Request $request)
    {
        $this->objectiveOptionService->store($question, $request);
        return redirect()->back()->with('success', "Option added Successfully");
    }

    public function correctOption(Classroom $classroom, ObjectiveQuestion $question, ObjectiveOption $option)
    {
        $message = $this->objectiveOptionService->correctOption($question, $option);
        return redirect()->back()->with($message[0], $message[1]);
    }
}
