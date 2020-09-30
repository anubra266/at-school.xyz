<?php

namespace App\Services;

use App\TheoryTest;

class TheoryTestService
{

    public function __construct(TheoryTest $theoryTest)
    {
        $this->theoryTest = $theoryTest;
    }

    public function index($classroom)
    {
        $classroom = $classroom->load('User');
        $tests = $classroom->theoryTests()->latest()->get();
        $tests->load('results.User');
        return ['classroom' => $classroom, 'tests' => $tests];
    }

    public function store($classroom, $request)
    {
        return $classroom->theoryTests()->create($request->validated());
    }

    public function edit($classroom, $test)
    {
        $test->load('questions');
        $classroom = $classroom->load('User');
        return ['classroom' => $classroom, 'test' => $test];
    }
    public function mark($classroom, $test)
    {
        $test->load(['questions', 'answers.User.theoryResults' => function ($q) use ($test) {
            $q->where('theory_test_id', $test->id);
        }, 'results']);
        $classroom = $classroom->load('User');
        return ['classroom' => $classroom, 'test' => $test];
    }

    public function score($test, $request)
    {
        $user_id = $request->user_id;
        $data = $request->validate(['score' => 'required|integer']);
        $store = ['user_id' => $user_id, 'score' => $data['score'], 'total' => $test->total_score];
        $test->results()->updateOrCreate(['id' => $request->id], $store);
    }

    public function update($classroom, $request)
    {
        $test = $this->theoryTest->find($request->id);
        if ($test->status === 'closed') {
            return $test->update($request->validated());
        } else {
            return 'open';
        }
    }

    public function status($classroom, $request)
    {
        $status = $request->validate(['status' => 'in:open,closed']);
        $test = $this->theoryTest->find($request->id);
        if ($request->status === 'open') {
            [$pass, $message] =  check_questions($test);
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
        $tests = filter_test($classroom->theoryTests()->whereStatus("open"));
        return ["classroom" => $classroom, "tests" => $tests, "type" => "theory"];
    }



    public function take($classroom, $test)
    {
        $classroom = $classroom->load("User");
        $test->load(["questions", "answers" => function ($query) {
            return $query->whereUser_id(authUser()->id);
        }]);
        return ["classroom" => $classroom, "test" => $test];
    }
}
