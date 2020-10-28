<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\PracticeTest;
use App\PracticeYear;
use Illuminate\Http\Request;

class PracticeAnswerController extends Controller
{
    public function saveTest(PracticeTest $test, PracticeYear $year, Request $request)
    {
        $total = $request->total;
        authUser()->practiceAnswers()->createMany($request->answers);
        $answers = $test->answers()
            ->whereUser_id(authUser()->id)
            ->whereHas('Option', function ($query) {
                $query->whereIs_correct(true);
            })->count();
        authUser()->practiceResults()
            ->create(["practice_test_id" => $test->id, "score" => $answers, 'total' => $total]);
        $data =  [$answers, $total];
        return redirect()->back()->with('response', $data);
    }

    public function reviewTest(PracticeTest $test, PracticeYear $year)
    {
        $year->load([
            "course",
            "questions" => function ($q) use ($test) {
                return $q->isEligible()
                    ->whereHas(
                        'practiceAnswers',
                        function ($q) use ($test) {
                            return $q
                                ->whereUser_id(authUser()->id)
                                ->wherePractice_test_id($test->id);
                        }
                    )
                    ->inRandomOrder();
            },
            "questions.options" => function ($q) {
                return $q->inRandomOrder();
            },
            "questions.options.practiceAnswers"
        ]);
        $test->noCountdown = true;
        $data = ['test' => $test, 'year' => $year];
        return Inertia::render('Dashboard/practice/hall/objective/review', $data);
    }
}
