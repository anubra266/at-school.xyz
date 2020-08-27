<?php

namespace App\Services;

use App\Environ;
use App\Organization;

class EnvironService
{
    public function __construct(Environ $environ)
    {
        $this->environ = $environ;
        $this->prefix = "ENV";
    }

    public function index()
    {
        $environs = authUser()->environs()->latest()->get();
        $environs->load('classrooms');
        return $environs;
    }
    public function store($request)
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
        $environ['code'] = $this->environ->generateCode($this->prefix);
        //*create environ
        $environ = authUser()->environs()->create($environ);
        return $environ;
    }

    public function update($request, $environ)
    {
        $new_environ = $request->validated();
        //*update environ
        $environ = $environ->update($new_environ);
        return $environ;
    }
    public function ChangeCode($environ)
    {
        //*Generate Code
        $new_code = array("code" => $this->environ->generateCode($this->prefix));
        //*update environ
        $environ = $environ->update($new_code);
        return $environ;
    }
}
