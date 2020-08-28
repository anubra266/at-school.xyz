<?php

namespace App\Http\Middleware;

use Closure;
use App\User;
use Illuminate\Database\Eloquent\Builder;

class ClassroomAuthorization
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $classroom = $request->classroom;
        $user = $request->user();
        $models = ['environs', 'organizations'];
        //* allow Educator
        if ($user->id === $classroom->user_id) {
            return $next($request);
        }
        //* allow Students
        elseif ($classroom->students()->find($user->id)) {
            return $next($request);
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
            return $next($request);
        }
        return redirect()->route('home');
    }
}
