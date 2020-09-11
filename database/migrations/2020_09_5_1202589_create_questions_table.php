<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->longText('question');
            $table->unsignedBigInteger('obj_test_id')->nullable();
            $table->unsignedBigInteger('theory_test_id')->nullable();
            $table->foreign('obj_test_id')->references('id')->on('objective_tests',)->onDelete('cascade');
            $table->foreign('theory_test_id')->references('id')->on('theory_tests')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('questions');
    }
}
