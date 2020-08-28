<?php

use App\User;
use Illuminate\Database\Eloquent\Builder;

if (!function_exists('checkClass')) {
    /**
     * Check User's role in a Classroom
     * @param {object} classroom Classroom to check
     * @param {object} user User to verify
     * @return {string} role
     */
    function checkClass($classroom, $user)
    {
        $models = ['environs', 'organizations'];
        //* allow Educator
        if ($user->id === $classroom->user_id) {
            return 'educator';
        }
        //* allow Students
        elseif ($classroom->students()->find($user->id)) {
            return 'student';
        }
        //*allow depheads or organization heads
        elseif (User::where(function (Builder $query) use ($models, $classroom) {
            foreach ($models as  $model) {
                $query->orwhereHas($model, function (Builder $query) use ($classroom) {
                    $query->whereHas('classrooms', function (Builder $query) use ($classroom) {
                        $query->where('classrooms.id', $classroom->id);
                    });
                });
            }
        })->find($user->id)) {
            return 'supervisor';
        }

        return false;
    }
}
