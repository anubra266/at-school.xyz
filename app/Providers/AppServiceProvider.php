<?php

namespace App\Providers;

use App\Classroom;
use App\Environ;
use App\Organization;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerInertia();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    public function registerInertia()
    {
        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });

        Inertia::share([
            //* Send user Information to all frontend views
            'auth' => function () {
                return [
                    'user' => Auth::user() ? [
                        'id' => Auth::user()->id,
                        'first_name' => Auth::user()->first_name,
                        'middle_name' => Auth::user()->middle_name,
                        'last_name' => Auth::user()->last_name,
                        'gender' => Auth::user()->gender,
                        'email' => Auth::user()->email,
                        'telephone' => Auth::user()->telephone,
                        'date_of_birth' => Auth::user()->date_of_birth,
                        'school' => Auth::user()->school,
                        'school_town' => Auth::user()->school_town,
                        'profile_image' => Auth::user()->profile_image,
                        'initial_role' => Auth::user()->initial_role,
                        'can' => [
                            'home' => true,
                            'organization' => Auth::user()->can('create_organizations'),
                            'environ' => Auth::user()->can('create_environs'),
                            'classroom' => Auth::user()->can('create_classrooms'),
                            'class' => Auth::user()->can('participate_classes'),
                            'practice' =>  Auth::user()->can('practice'),
                            'settings' => true,

                            'classroom_home' => true,
                        ]
                        // 'account' => [
                        //     'id' => Auth::user()->account->id,
                        //     'name' => Auth::user()->account->name,
                        // ],
                    ] : null,
                ];
            },
            //* Make errors available to react
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },
            //* flash messages
            'flash' => function () {
                return [
                    'success' => Session::get('success'),
                    'error' => Session::get('error'),
                    'info' => Session::get('info'),
                    'warning' => Session::get('warning'),
                ];
            },
        ]);
    }
}
