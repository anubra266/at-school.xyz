<?php

namespace App\Policies;

use App\Environ;
use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EnvironPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        //return $user->hasAnyRole(['department_head', 'organization_admin']);
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\User  $user
     * @param  \App\Environ  $environ
     * @return mixed
     */
    public function view(User $user, Environ $environ)
    {
        //
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\User  $user
     * @param  \App\Environ  $environ
     * @return mixed
     */
    public function update(User $user, Environ $environ)
    {
        return $user->id === $environ->user_id;
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Environ  $environ
     * @return mixed
     */
    public function delete(User $user, Environ $environ)
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\User  $user
     * @param  \App\Environ  $environ
     * @return mixed
     */
    public function restore(User $user, Environ $environ)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\User  $user
     * @param  \App\Environ  $environ
     * @return mixed
     */
    public function forceDelete(User $user, Environ $environ)
    {
        //
    }
}
