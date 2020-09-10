<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObjectiveOptionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('objective_options', function (Blueprint $table) {
            $table->id();
            $table->longText('option');
            $table->boolean('is_correct')->default(false);
            $table->unsignedBigInteger('objective_question_id');
            $table->foreign('objective_question_id')->references('id')->on('objective_questions')->onDelete('cascade');
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
        Schema::dropIfExists('objective_options');
    }
}
