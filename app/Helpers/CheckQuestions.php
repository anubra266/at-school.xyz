<?php

use Carbon\Carbon;

if (!function_exists('check_questions')) {
    /**
     * Filter Tests without questions
     * @param {object} test to filter
     * @param {boolean} objective Indicates if test is objective
     */
    function check_questions($test, $objective = false)
    {
        //? Ensure test has questions
        $pass = [true, ''];
        $test_has_questions =  $test->questions()->count() > 0;
        if (!$test_has_questions) {
            $message =  [false, 'Test must contain questions to be open'];
            return $message;
        } else {
            $message = $pass;
        }

        if ($objective) {
            $minimum_options = 2;
            $questions_without_minimum_options = 0;
            $questions_without_correct_option = 0;
            foreach ($test->questions()->get() as $question) {
                $question->options()->count() < $minimum_options && $questions_without_minimum_options += 1;
                $correct_option = $question->options()->whereIs_correct(true)->count();
                $correct_option < 1 && $questions_without_correct_option += 1;
            };
            //? ensure objective test has options in all questions
            if ($questions_without_minimum_options > 0) {
                $plural = $questions_without_minimum_options !== 1 ? 's' : '';
                $pluralV = $questions_without_minimum_options !== 1 ? 'do' : 'does';
                $message =  [false, "$questions_without_minimum_options question$plural $pluralV not have up to $minimum_options options"];
            }
            //? ensure objective test has correct option in all questions
            elseif ($questions_without_correct_option > 0) {
                $plural = $questions_without_correct_option !== 1 ? 's' : '';
                $pluralV = $questions_without_correct_option !== 1 ? 'do' : 'does';
                $message =  [false, "$questions_without_correct_option question$plural $pluralV not have a correct option"];
            } else {
                $message = $pass;
            }
        }
        return $message;
    }
}
if (!function_exists('filter_time')) {
    /**
     *  Get tests by starttime and deadline
     */
    function filter_time($tests)
    {
        $now = Carbon::createFromFormat('Y-m-d H:i:s', Carbon::now()->addHour())->format('Y-m-d H:i:s');
        // dd($now);
        return $tests
            ->where('deadline', ">", $now)
            ->where('start_time', "<=", $now)
            ->get();
    }
}
