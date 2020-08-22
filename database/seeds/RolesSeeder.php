<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $practicist = Role::create(['name' => 'practicist']);
        $student = Role::create(['name' => 'student']);
        $educator = Role::create(['name' => 'educator']);
        $department_head = Role::create(['name' => 'department_head']);
        $organization_admin = Role::create(['name' => 'organization_admin']);
    }
}
