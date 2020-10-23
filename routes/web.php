<?php

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Spatie\Permission\Contracts\Role;

Auth::routes();

Route::group(['middleware' => ['guest']], function () {
    //?Index route
    Route::get('/', 'PublicController@landing')->name('landing');
});

//? Only Users authenticated and with finished registration
Route::group(['middleware' => ['auth']], function () {

    Route::group(['namespace' => 'Auth'], function () {
        Route::get('logout', 'LoginController@logout')->name('logout');
    });

    Route::get('/account/setup/{role}', 'RolesController@setRole')->name('account.setup');
    Route::post('/account/setup/org', 'RolesController@createOrg')->name('account.org');
    Route::post('/account/setup/env', 'RolesController@createEnv')->name('account.env');
    Route::post('/account/setup/crm', 'RolesController@createCrm')->name('account.crm');
    Route::post('/account/setup/cls', 'RolesController@joinCls')->name('account.cls');
    Route::post('/account/setup/prc', 'RolesController@joinPrc')->name('account.prc');

    Route::group(['middleware' => ['setrole']], function () {

        Route::get('home', 'PrivateController@home')->name('home');
        Route::get('practice', 'PracticeController@index')->name('practice');
        Route::post('practice/categories', 'PracticeCategoryController@store')->name('practice.categories.store');


        //? Settings route
        Route::get('/settings', 'SettingController@general')->name('settings.general');
        Route::patch('/settings/basic', 'SettingController@basic')->name('settings.basic');
        Route::patch('/settings/profile-image', 'SettingController@profile')->name('settings.dp');
        Route::patch('/fakeupload', 'SettingController@fakeUpload')->name('upload.fake');
        Route::patch('/settings/theme', 'SettingController@theme')->name('settings.theme');
        Route::patch('/settings/password', 'SettingController@password')->name('settings.password');
        Route::patch('/settings/permit/pquestions', 'SettingController@pQuestions')->name('settings.permit.pquestions');
        Route::patch('/settings/pquestions/status/{toEnable}', 'SettingController@pQuestionsStatus')->name('settings.pquestions.status');

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
                    Route::post('block-student/{classroom}/{student}', 'ClassroomController@block')->name('classroom.block');
                });
            });

            //? Classroom activities routes
            Route::group(['middleware' => ['class.auth'], 'prefix' => '{classroom}'], function () {
                Route::get('/', 'WorkspaceController@home')->name('classroom.home');
                //? View Members
                Route::get('/members', 'WorkspaceController@members')->name('classroom.members');
                //? Educator Only Routes
                Route::group(['middleware' => ['educator.only']], function () {
                    //? Assessments' routes
                    Route::group(['prefix' => 'assessments'], function () {
                        //? View Theory Assessments
                        Route::get('/edu-theory', 'TheoryTestController@index')->name('theory.index');
                        Route::post('/edu-theory', 'TheoryTestController@store')->name('theory.create');
                        Route::patch('/edu-theory-status', 'TheoryTestController@status')->name('theory.status');

                        //? Edit Theory Assessments
                        Route::patch('/edu-theory', 'TheoryTestController@update')->name('theory.update');
                        Route::delete('/edu-theory/{test}', 'TheoryTestController@destroy')->name('theory.delete');
                        Route::get('/edu-theory/{test}/edit', 'TheoryTestController@edit')->name('theory.edit');
                        Route::get('/mark/{test}/', 'TheoryTestController@mark')->name('theory.mark');
                        Route::post('/score/{test}/', 'TheoryTestController@score')->name('theory.score');

                        //? View Objective Assessments
                        Route::get('/edu-objective', 'ObjectiveTestController@index')->name('objective.view');
                        Route::post('/edu-objective', 'ObjectiveTestController@store')->name('objective.create');
                        Route::patch('/edu-objective-status', 'ObjectiveTestController@status')->name('objective.status');

                        //? Edit Objective Assessments
                        Route::patch('/edu-objective', 'ObjectiveTestController@update')->name('objective.update');
                        Route::delete('/edu-objective/{test}', 'ObjectiveTestController@destroy')->name('objective.delete');
                        Route::get('/edu-objective/{test}/edit', 'ObjectiveTestController@edit')->name('objective.edit');

                        //? Questions
                        Route::post('/question', 'QuestionController@store')->name('question.create');
                        Route::patch('/question', 'QuestionController@update')->name('question.update');
                        Route::post('/question/{question}', 'QuestionController@destroy')->name('question.delete');

                        //? Options
                        Route::post('/question/{question}/option', 'ObjectiveOptionController@store')->name('option.create');
                        Route::post('/question/{question}/correct/{option}', 'ObjectiveOptionController@correctOption')->name('option.correct');
                        Route::post('/option/{option}', 'ObjectiveOptionController@destroy')->name('option.destroy');

                        //? Solution
                        Route::post('/question/{question}/solution', 'SolutionController@save')->name('solution.save');

                        //? Import from Excel
                        Route::post('/question', 'QuestionController@import')->name('question.import');
                    });
                });

                Route::group(['prefix' => 'assessments'], function () {
                    Route::get('/stud-theory', 'TheoryTestController@list')->name('theory.list');
                    Route::get('/stud-objective', 'ObjectiveTestController@list')->name('objective.list');
                });
                //? take assesments
                Route::get('/theass/{test}', 'TheoryTestController@take')->name('theory.take');
                Route::get('/objeass/{test}', 'ObjectiveTestController@take')->name('objective.take');

                Route::post('/theory/answer/{test}', 'TestAnswerController@saveTheory')->name('theory.answer');
                Route::post('/objective/answer/{test}', 'TestAnswerController@saveObjective')->name('objective.answer');
                Route::get('/objereview/{test}', 'ObjectiveTestController@review')->name('objective.review');

                Route::group(['prefix' => 'results'], function () {
                    Route::get('/edu-theory', 'ResultController@eduTheory')->name('results.edu.theory');
                    Route::get('/edu-objective', 'ResultController@eduObjective')->name('results.edu.objective');
                });
            });
        });
    });
});
