<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
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

        $practice = Permission::create(['name' => 'practice_questions']);
        $participate_classes = Permission::create(['name' => 'participate_classes']);
        $create_classrooms = Permission::create(['name' => 'create_classrooms']);
        $create_environs = Permission::create(['name' => 'create_environs']);
        $create_organizations = Permission::create(['name' => 'create_organizations']);


    }
}
