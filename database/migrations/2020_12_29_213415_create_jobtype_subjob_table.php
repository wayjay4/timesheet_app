<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobtypeSubjobTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobtype_subjob', function (Blueprint $table) {
            $table->unsignedBigInteger('jobtype_id');
            $table->unsignedBigInteger('subjob_id');

            $table->foreign('jobtype_id')->references('id')->on('jobtypes');
            $table->foreign('subjob_id')->references('id')->on('subjobs');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobtype_subjob');
    }
}
