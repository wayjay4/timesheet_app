<?php

namespace Database\Seeders;

use App\Models\Jobtype;
use App\Models\Subjob;
use App\Models\Subtask;
use App\Models\Tasktype;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	DB::statement('SET FOREIGN_KEY_CHECKS = 0');

    	Jobtype::truncate();
    	Subjob::truncate();
    	Tasktype::truncate();
    	Subtask::truncate();
    	DB::table('jobtype_subjob')->truncate();
    	DB::table('subjob_tasktype')->truncate();
    	DB::table('subtask_tasktype')->truncate();

    	Jobtype::flushEventListeners();
    	Subjob::flushEventListeners();
    	Tasktype::flushEventListeners();
    	Subtask::flushEventListeners();

    	$jobtypeQuantity = 12;
    	$subjobQuantity = 100;
    	$tasktypeQuantity = 100;
    	$subtaskQuantity = 100;

		Subtask::factory()->times($subtaskQuantity)->create();

		Tasktype::factory()->times($tasktypeQuantity)
			->create()
			->each(
				function($tasktype){
					$subtasks = Subtask::all()
									->random(mt_rand(1,5))
									->pluck('id');

					$tasktype->subtasks()->attach($subtasks);
				}
			);

		Subjob::factory()->times($subjobQuantity)
			->create()
			->each(
				function($subjob){
					$tasktypes = Tasktype::all()
									->random(mt_rand(1,5))
									->pluck('id');

					$subjob->tasktypes()->attach($tasktypes);
				}
			);

		Jobtype::factory()->times($jobtypeQuantity)
			->create()
			->each(
				function($jobtype){
					$subjobs = Subjob::all()
								->random(mt_rand(1,5))
								->pluck('id');

					$jobtype->subjobs()->attach($subjobs);
				}
			);
    }
}
