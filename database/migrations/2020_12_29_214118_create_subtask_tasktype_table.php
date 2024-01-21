<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubtaskTasktypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subtask_tasktype', function (Blueprint $table) {
            $table->unsignedBigInteger('subtask_id');
            $table->unsignedBigInteger('tasktype_id');

            $table->foreign('subtask_id')->references('id')->on('subtasks');
            $table->foreign('tasktype_id')->references('id')->on('tasktypes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subtask_tasktype');
    }
}
