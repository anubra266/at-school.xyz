<?php

namespace App\Services;

use App\Organization;


class OrganizationService
{
    public function __construct(Organization $organization)
    {
        $this->organization = $organization;
    }

    public function store($request)
    {
        $organization = $request->validated();
        //*generate random code with faker
        $organization['code'] = $this->organization->generateCode('ORG');
        //*create organization
        $organization = authUser()->organizations()->create($organization);
        //* Give role to user if it does not exist
        authUser()->assignRole(authUser()->initial_role);
        return $organization;
    }
}
