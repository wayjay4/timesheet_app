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
            $table->string('building');
            $table->date('date');
            $table->string('type');
            $table->string('subtype');
            $table->string('task');
            $table->string('subtask');
            $table->decimal('hours', $precision = 8, $scale = 2)->unsigned();
            $table->date('date_submitted');
            $table->unsignedBigInteger('account_id');
            $table->unsignedBigInteger('activity_id');
            $table->timestamps();

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
