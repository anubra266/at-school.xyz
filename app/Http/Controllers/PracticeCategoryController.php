<?php

namespace App\Http\Controllers;

use App\Http\Requests\PracticeCategoryRequest;
use App\PracticeCategory;
use Illuminate\Http\Request;

use function GuzzleHttp\Promise\all;

class PracticeCategoryController extends Controller
{
    public function __construct(PracticeCategory $category)
    {
        $this->category = $category;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PracticeCategoryRequest $request)
    {
        $category = $request->validated();
        $this->category->create($category);
        return backward('success', "$request->name Category Created");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PracticeCategory  $practiceCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PracticeCategory $practiceCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PracticeCategory  $practiceCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(PracticeCategory $practiceCategory)
    {
        //
    }
}
