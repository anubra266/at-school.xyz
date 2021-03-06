<?php

namespace App\Services;

use App\Classroom;
use App\Environ;
use App\Organization;

class RolesService
{
    public function createOrg($request)
    {
        $organization = $request->validated();
        //*generate random code with faker
        $organization['code'] = Organization::generateCode('ORG');
        authUser()->assignRole('organization_admin');
        //*create organization
        $organization = authUser()->organizations()->create($organization);
        return $organization;
    }
    public function createEnv($request)
    {
        $environ = $request->validated();
        // * get organization
        $organization = Organization::whereCode($request->code)->first();
        if (!$organization) {
            return null;
        }
        //*add organization data to environ
        $environ['organization_id'] = $organization->id;
        //*generate random code with faker
        $environ['code'] = Environ::generateCode('ENV');
        authUser()->assignRole('department_head');
        //*create environ
        $environ = authUser()->environs()->create($environ);
        return $environ;
    }

    public function createCrm($request)
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
        $classroom['code'] = Classroom::generateCode('CRM');
        authUser()->assignRole('educator');
        //*create environ
        $classroom = authUser()->classrooms()->create($classroom);
        return $environ;
    }

    public function joinCls($request)
    {
        $classroom_code = $request->validated();
        $classroom = Classroom::whereCode($classroom_code)->first();
        authUser()->assignRole('student');
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

    public function joinPrc()
    {
        authUser()->assignRole('practicist');
    }
}
