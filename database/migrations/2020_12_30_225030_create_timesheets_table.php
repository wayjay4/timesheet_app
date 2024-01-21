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
            $table->string('foreman_name');
            $table->date('date');
            $table->decimal('hours', $precision = 8, $scale = 2)->unsigned();
            $table->date('date_submitted');
            $table->foreignId('jobtype_id')->constrained('jobtypes');
            $table->foreignId('subjob_id')->constrained('subjobs');
            $table->foreignId('tasktype_id')->constrained('tasktypes');
            $table->foreignId('subtask_id')->constrained('subtasks');
            $table->foreignId('supervisor_id')->constrained('users');
            $table->foreignId('account_id')->constrained('users');
            $table->foreignId('activity_id')->constrained('activities');
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
        Schema::dropIfExists('timesheets');
    }
}
