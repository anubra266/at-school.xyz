<?php

namespace App\Http\Controllers;

use App\PracticeYear;
use App\PracticeCourse;
use Illuminate\Http\Request;
use App\Http\Requests\PracticeYearRequest;

class PracticeYearController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PracticeCourse $course, PracticeYearRequest $request)
    {
        $request= $request->validated();
        $course->years()->create($request);
        return backward('success','Year added successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PracticeYear  $practiceYear
     * @return \Illuminate\Http\Response
     */
    public function show(PracticeYear $practiceYear)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PracticeYear  $practiceYear
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PracticeYear $practiceYear)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PracticeYear  $practiceYear
     * @return \Illuminate\Http\Response
     */
    public function destroy(PracticeYear $practiceYear)
    {
        //
    }
}
