<?php

namespace App\Services;

use App\Classroom;

class ClassService
{
    public function __construct(Classroom $classroom)
    {
        $this->class = $classroom;
    }
    public function index()
    {
        $classes = authUser()->classes()->latest()->get();
        return $classes;
    }

    public function join($request)
    {
        $classroom_code = $request->validated();
        $classroom = $this->class->whereCode($classroom_code)->first();
        if (!$classroom) {
            return [null, 'Invalid Classroom code!'];
        } elseif ($classroom->user_id === authUser()->id) {
            return [null, 'You can\'t join a Classroom you created!'];
        } elseif ($classroom->students()->find(authUser()->id)) {
            return [null, 'You\'re already a member of this Class!'];
        }
        $classroom->students()->attach(authUser()->id);
        return [$classroom, false];
    }
    public function leave($classroom)
    {
        $classroom = $classroom->students()->detach(authUser()->id);
        return $classroom;
    }
}
