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

        $arrayOfPermissionNames = ['practice', 'participate_classes', 'create_classrooms', 'create_environs', 'create_organizations'];

        $permissions = collect($arrayOfPermissionNames)->map(function ($permission) {
            return ['name' => $permission, 'guard_name' => 'web'];
        });

        Permission::insert($permissions->toArray());

        Role::create(['name' => 'practicist'])->givePermissionTo(['practice']);

        Role::create(['name' => 'student'])->givePermissionTo(['participate_classes', 'practice']);

        Role::create(['name' => 'educator'])->givePermissionTo(['create_classrooms']);

        Role::create(['name' => 'department_head'])->givePermissionTo(['create_environs', 'create_classrooms']);

        Role::create(['name' => 'organization_admin'])->givePermissionTo(['create_organizations', 'create_environs', 'create_classrooms']);
    }
}
