<?php
if (!function_exists('pop')) {
    /**
     * hash Classroom and Specify user role
     * @param {object} classroom Classroom to mutate
     */
    function pop($classroom)
    {
        $classroom->hash = $classroom->hashid();
        $classroom->role = checkClass($classroom, authUser());
        return $classroom;
    }
}
