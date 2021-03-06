<?php

namespace App\Services;

use App\Organization;


class OrganizationService
{
    public function __construct(Organization $organization)
    {
        $this->organization = $organization;
        $this->prefix = 'ORG';
    }

    public function index()
    {
        $organizations = authUser()->organizations()->latest()->get();
        $organizations->load(['environs.classrooms' => function ($q) {
            $q->withCount('students');
        }]);
        return $organizations;
    }
    public function store($request)
    {
        $organization = $request->validated();
        //*generate random code with faker
        $organization['code'] = $this->organization->generateCode($this->prefix);
        //*create organization
        $organization = authUser()->organizations()->create($organization);
        return $organization;
    }
    public function update($request, $organization)
    {
        $new_organization = $request->validated();
        //*update organization
        $organization = $organization->update($new_organization);
        return $organization;
    }
    public function ChangeCode($organization)
    {
        //*Generate Code
        $new_code = array("code" => $this->organization->generateCode($this->prefix));
        //*update organization
        $organization = $organization->update($new_code);
        return $organization;
    }
}
