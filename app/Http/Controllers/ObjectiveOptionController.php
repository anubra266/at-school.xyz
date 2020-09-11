<?php

namespace App\Http\Controllers;

use App\Classroom;
use App\ObjectiveOption;
use App\Question;
use Illuminate\Http\Request;
use App\Services\ObjectiveOptionService;

class ObjectiveOptionController extends Controller
{
    public function __construct(ObjectiveOptionService $objectiveOptionService)
    {
        $this->objectiveOptionService = $objectiveOptionService;
    }

    public function store(Classroom $classroom, Question $question, Request $request)
    {
        $this->objectiveOptionService->store($question, $request);
        return redirect()->back()->with('success', "Option added Successfully");
    }

    public function correctOption(Classroom $classroom, Question $question, ObjectiveOption $option)
    {
        $message = $this->objectiveOptionService->correctOption($question, $option);
        return redirect()->back()->with($message[0], $message[1]);
    }
    public function destroy(Classroom $classroom, ObjectiveOption $option)
    {
        $message = $this->objectiveOptionService->destroy($option);
        return redirect()->back()->with('success', "Option deleted Successfully");
    }
}
  