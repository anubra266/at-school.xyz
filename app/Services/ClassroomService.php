<?php

namespace App\Services;

use App\Classroom;
use App\Environ;

class ClassroomService
{
    public function __construct(Classroom  $classroom)
    {
        $this->classroom = $classroom;
        $this->prefix = 'CRM';
    }

    public function index()
    {
        $classrooms = authUser()->classrooms()->latest()->get();
        return $classrooms;
    }

    public function store($request)
    {
        $classroom = $request->validated();
        // * get organization
        $environ = Environ::whereCode($request->code)->first();
        if (!$environ) {
            return null;
        }
        //*add environ data to classroom
        $classroom['environ_id'] = $environ->id;
        //*generate random code with faker
        $classroom['code'] = $this->classroom->generateCode($this->prefix);
        //*create environ
        $classroom = authUser()->classrooms()->create($classroom);
        return $environ;
    }

    public function update($request)
    {
        $classroom_id = $request->id;
        $classroom = $request->validated();
        //*update classroom
        $classroom = authUser()->classrooms()->find($classroom_id)->update($classroom);
        return $classroom;
    }
    public function ChangeCode($classroom)
    {
        //*Generate Code
        $new_code = array("code" => $this->classroom->generateCode($this->prefix));
        //*update classroom
        $classroom = $classroom->update($new_code);
        return $classroom;
    }
}
