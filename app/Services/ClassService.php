<?php

namespace App\Services;

use App\Classroom;

class ClassService
{
    public function __construct(Classroom $classroom)
    {
        $this->classroom = $classroom;
    }
    public function index()
    {
        return authUser()->classes()->latest()->get();
    }

    public function join($request)
    {
        $classroom_code = $request->validated();
        $classroom = $this->classroom->whereCode($classroom_code)->first();
        if (!$classroom) {
            return [null, 'Invalid Classroom code!'];
        } elseif ($classroom->user_id === authUser()->id) {
            return [null, 'You can\'t join a Classroom you created!'];
        } elseif ($classroom->students()->find(authUser()->id)) {
            return [null, 'You\'re already a member of this Class!'];
        }
        $classroom->students()->attach(authUser()->id);
        return [$classroom];
    }
    public function leave($classroom)
    {
        $classroom = $classroom->students()->detach(authUser()->id);
        return $classroom;
    }
}
