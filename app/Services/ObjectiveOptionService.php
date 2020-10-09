<?php

namespace App\Services;

class ObjectiveOptionService
{
    public function store($question, $request)
    {
        return $question->options()->create($request->validate(['option' => 'required']));
    }

    public function correctOption($question, $option)
    {
        $correctOption = $question->options()->whereIs_correct(true)->first();
        if ($correctOption) {
            if ($correctOption->id === $option->id) {
                return ['error', 'Option has been set before'];
            } else {
                $correctOption->update(['is_correct' => false]);
            }
        }
        $verify_option  = $question->options()->whereId($option->id)->first();
        if ($verify_option) {
            $option->update(['is_correct' => true]);
            return ['success', 'Correct option set successfully'];
        } else {
            return ['error', 'Invalid Option'];
        }
    }
    public function destroy($option)
    {
        $option->delete();
    }
}
