<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTimesheetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('timesheets', function (Blueprint $table) {
            $table->id();
            $table->date('week_ending');
            $table->string('building');
            $table->date('date');
            $table->decimal('hours', $precision = 8, $scale = 2)->unsigned();
            $table->date('date_submitted');
            $table->unsignedBigInteger('jobtype_id');
            $table->unsignedBigInteger('subjob_id');
            $table->unsignedBigInteger('tasktype_id');
            $table->unsignedBigInteger('subtask_id');
            $table->unsignedBigInteger('account_id');
            $table->unsignedBigInteger('activity_id');
            $table->timestamps();

            $table->foreign('jobtype_id')->references('id')->on('jobtypes');
            $table->foreign('subjob_id')->references('id')->on('subjobs');
            $table->foreign('tasktype_id')->references('id')->on('tasktypes');
            $table->foreign('subtask_id')->references('id')->on('subtasks');
            $table->foreign('account_id')->references('id')->on('users');
            $table->foreign('activity_id')->references('id')->on('activities');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('timesheets');
    }
}
