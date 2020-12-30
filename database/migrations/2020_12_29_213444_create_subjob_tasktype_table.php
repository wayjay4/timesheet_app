<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubjobTasktypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subjob_tasktype', function (Blueprint $table) {
            $table->unsignedBigInteger('subjob_id');
            $table->unsignedBigInteger('tasktype_id');

            $table->foreign('subjob_id')->references('id')->on('subjobs');
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
        Schema::dropIfExists('subjob_tasktype');
    }
}
