<?php

namespace App\Services;

use App\Organization;


class OrganizationService
{
    public function __construct(Organization $organization)
    {
        $this->organization = $organization;
    }

    public function index()
    {
        $organizations = authUser()->organizations()->latest()->get();
        $organizations->load('environs.classrooms');
        return $organizations;
    }
    public function store($request)
    {
        $organization = $request->validated();
        //*generate random code with faker
        $organization['code'] = $this->organization->generateCode('ORG');
        //*create organization
        $organization = authUser()->organizations()->create($organization);
        return $organization;
    }
    public function update($request)
    {
        $organization_id = $request->id;
        $organization = $request->validated();
        //*update organization
        $organization = authUser()->organizations()->find($organization_id)->update($organization);
        return $organization;
    }
    public function ChangeCode($organization)
    {
        //*Generate Code
        $new_code = array("code" => $this->organization->generateCode('ORG'));
        //*update organization
        $organization = $organization->update($new_code);
        return $organization;
    }
}
