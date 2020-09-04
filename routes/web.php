<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Contracts\Role;

//?Index route
Route::get('/', 'PublicController@landing')->name('landing');

Auth::routes();

//? Registration Routes...
Route::get('register', 'MyAuthController@showRegistrationForm')->name('register');

//? login routes
Route::get('login', 'MyAuthController@showLoginForm')->name('login');
Route::group(['namespace' => 'Auth', 'middleware' => ['auth']], function () {
    Route::get('logout', 'LoginController@logout')->name('logout');
});

//? Password Reset Routes...
Route::get('password/reset', 'MyAuthController@showLinkRequestForm')->name('password.request');

//? Email Verification Routes...
Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');


//? Only Users authenticated and with finished registration
Route::group(['middleware' => ['auth']], function () {

    Route::get('home', 'PrivateController@home')->name('home');

    //? Organization routes
    Route::group(['prefix' => 'organization', 'middleware' => ['can:create_organizations']], function () {

        Route::get('/', 'OrganizationController@index')->name('organization.index');
        Route::post('/', 'OrganizationController@store')->name('organization.create');

        Route::group(['middleware' => ['can:update,organization']], function () {
            Route::patch('/{organization}/newcode', 'OrganizationController@ChangeCode')->name('organization.change_code');
            Route::patch('/{organization}', 'OrganizationController@update')->name('organization.edit');
        });
    });

    //? Environ routes
    Route::group(['prefix' => 'environ', 'middleware' => ['can:create_environs']], function () {
        Route::get('/', 'EnvironController@index')->name('environ.index');
        Route::post('/', 'EnvironController@store')->name('environ.create');

        Route::group(['middleware' => ['can:update,environ']], function () {
            Route::patch('/{environ}/newcode', 'EnvironController@ChangeCode')->name('environ.change_code');
            Route::patch('/{environ}', 'EnvironController@update')->name('environ.edit');
        });
    });

    //? Classroom Participation routes
    Route::group(['prefix' => 'class'], function () {
        Route::group(['middleware' => ['can:participate_classes']], function () {
            Route::get('/', 'ClassController@index')->name('class.index');
            Route::post('/join', 'ClassController@join')->name('class.join');
            Route::patch('/{classroom}/leave', 'ClassController@leave')->name('class.leave');
        });
    });

    //? Classroom routes
    Route::group(['prefix' => 'classroom'], function () {
        Route::group(['middleware' => ['can:create_classrooms']], function () {
            Route::get('/', 'ClassroomController@index')->name('classroom.index');
            Route::post('/', 'ClassroomController@store')->name('classroom.create');

            Route::group(['middleware' => ['can:update,classroom']], function () {
                Route::patch('/{classroom}/newcode', 'ClassroomController@ChangeCode')->name('classroom.change_code');
                Route::patch('/{classroom}', 'ClassroomController@update')->name('classroom.edit');
            });
        });

        //? Classroom activities routes
        Route::group(['middleware' => ['class.auth']], function () {
            Route::get('/{classroom}', 'WorkspaceController@home')->name('classroom.home');
            //? View Members
            Route::get('/{classroom}/members', 'WorkspaceController@members')->name('classroom.members');
            //? Educator Only Routes
            Route::group(['middleware' => ['educator.only']], function () {
                //? View Theory Assessments
                Route::get('/{classroom}/assessments/edu-theory', 'TheoryTestController@index')->name('theory.index');
                Route::post('/{classroom}/assessments/edu-theory', 'TheoryTestController@store')->name('theory.create');
                Route::patch('/{classroom}/assessments/edu-theory', 'TheoryTestController@update')->name('theory.update');
                Route::delete('/{classroom}/assessments/edu-theory/{test}', 'TheoryTestController@destroy')->name('theory.delete');
                Route::get('/{classroom}/assessments/edu-theory/{test}/edit', 'TheoryTestController@edit')->name('theory.edit');

                Route::post('/{classroom}/assessments/theory/question', 'TheoryQuestionController@store')->name('theory.question.create');
                Route::patch('/{classroom}/assessments/theory/question', 'TheoryQuestionController@update')->name('theory.question.update');
                Route::delete('/{classroom}/assessments/theory/question/{question}', 'TheoryQuestionController@destroy')->name('theory.question.delete');

                Route::get('/{classroom}/assessments/edu-objective', 'ObjectiveTestController@index')->name('objective.view');
                Route::post('/{classroom}/assessments/edu-objective', 'ObjectiveTestController@store')->name('objective.create');
                Route::patch('/{classroom}/assessments/edu-objective', 'ObjectiveTestController@update')->name('objective.update');
                Route::delete('/{classroom}/assessments/edu-objective/{test}', 'ObjectiveTestController@destroy')->name('objective.delete');
                Route::get('/{classroom}/assessments/edu-objective/{test}/edit', 'ObjectiveTestController@edit')->name('objective.edit');

                Route::post('/{classroom}/assessments/objective/question', 'ObjectiveQuestionController@store')->name('objective.question.create');
                Route::patch('/{classroom}/assessments/objective/question', 'ObjectiveQuestionController@update')->name('objective.question.update');
                Route::delete('/{classroom}/assessments/objective/question/{question}', 'ObjectiveQuestionController@destroy')->name('objective.question.delete');

            });
        });
    });
});



// ?Password Reset Routes...
// Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
// Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
// Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
// Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');
// ?Email Verification Routes...
// Route::get('email/verify', 'Auth\VerificationController@show')->name('verification.notice');
// Route::get('email/verify/{id}/{hash}', 'Auth\VerificationController@verify')->name('verification.verify');
// Route::post('email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
