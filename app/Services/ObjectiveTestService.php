<?php

namespace App\Services;

use App\ObjectiveTest;

class ObjectiveTestService
{
    public function __construct(ObjectiveTest $objectiveTest)
    {
        $this->objectiveTest = $objectiveTest;
    }

    public function index($classroom)
    {
        $classroom = $classroom->load('User');
        $tests = $classroom->objectiveTests()->latest()->get();
        $tests->load('results.User');
        return ['classroom' => $classroom, 'tests' => $tests];
    }

    public function store($classroom, $request)
    {
        return $classroom->objectiveTests()->create($request->validated());
    }

    public function edit($classroom, $test)
    {
        $test->load(['questions.options', 'questions.solution']);
        $classroom = $classroom->load('User');
        return ['classroom' => $classroom, 'test' => $test];
    }

    public function update($classroom, $request)
    {
        $test = $this->objectiveTest->find($request->id);
        if ($test->status === 'closed') {
            return $test->update($request->validated());
        } else {
            return 'open';
        }
    }

    public function status($classroom, $request)
    {
        $status = $request->validate(['status' => 'in:open,closed']);
        $test = $this->objectiveTest->find($request->id);
        if ($request->status === 'open') {
            [$pass, $message] =  check_questions($test, true);
            if (!$pass) return ['error', $message];
        } else {
            $message = ['error', "You can't close a test already taken by your Students!"];
            if ($test->answers()->count() > 0) return $message;
        }
        $test->update($status);
        $message = ['success', "Assessment $request->status successfully"];
        return $message;
    }


    public function destroy($classroom, $test)
    {
        return $test->delete();
    }



    public function list($classroom)
    {
        $classroom = $classroom->load('User');
        $tests = filter_test($classroom->objectiveTests()->whereStatus("open"));
        return ["classroom" => $classroom, "tests" => $tests, "type" => "objective"];
    }



    public function take($classroom, $test)
    {
        $classroom = $classroom->load('User');
        $test->load([
            "questions" => fn ($q) => $q->inRandomOrder(),
            "questions.options" => fn ($q) => $q->inRandomOrder()->exclude('is_correct')
        ]);
        return ["classroom" => $classroom, "test" => $test];
    }
    public function review($classroom, $test)
    { 
        $classroom = $classroom->load('User');
        $test->load(["questions.options.answers" => function ($q) {
            $q->whereUser_id(authUser()->id);
        }]);
        $test->noCountdown = true;
        return ['classroom' => $classroom, 'test' => $test];
    }
}
