<?php

namespace Database\Seeders;

use App\Models\Jobtype;
use App\Models\Subjob;
use App\Models\Subtask;
use App\Models\Tasktype;
use App\Models\Activity;
use App\Models\Costcenter;
use App\Models\Project;
use App\Models\Role;
use App\Models\Timesheet;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Database\Seeders\RoleSeeder;
use Database\Seeders\JobtypeSeeder;
use Database\Seeders\SubjobSeeder;
use Database\Seeders\TasktypeSeeder;
use Database\Seeders\SubTaskSeeder;

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

    	$jobtypeQuantity = 15;
    	$subjobQuantity = 30;
    	$tasktypeQuantity = 191;
    	$subtaskQuantity = 73;

    	$this->call([
          SubtaskSeeder::class,
        ]);

		// Subtask::factory()->times($subtaskQuantity)->create();

		$this->call([
          TasktypeSeeder::class,
        ]);

		// Tasktype::factory()->times($tasktypeQuantity)
		// 	->create()
		// 	->each(
		// 		function($tasktype){
		// 			$subtasks = Subtask::all()
		// 							->random(mt_rand(1,16))
		// 							->pluck('id');

		// 			$tasktype->subtasks()->attach($subtasks);
		// 		}
		// 	);

		$this->call([
          SubjobSeeder::class,
        ]);

		// Subjob::factory()->times($subjobQuantity)
		// 	->create()
		// 	->each(
		// 		function($subjob){
		// 			$tasktypes = Tasktype::all()
		// 							->random(mt_rand(1,40))
		// 							->pluck('id');

		// 			$subjob->tasktypes()->attach($tasktypes);
		// 		}
		// 	);

		$this->call([
          JobtypeSeeder::class,
        ]);

		// Jobtype::factory()->times($jobtypeQuantity)
		// 	->create()
		// 	->each(
		// 		function($jobtype){
		// 			$subjobs = Subjob::all()
		// 						->random(mt_rand(1,4))
		// 						->pluck('id');

		// 			$jobtype->subjobs()->attach($subjobs);
		// 		}
		// 	);



		Activity::truncate();
    	Costcenter::truncate();
    	Project::truncate();
    	Role::truncate();
    	Timesheet::truncate();
    	User::truncate();

    	Activity::flushEventListeners();
    	Costcenter::flushEventListeners();
    	Project::flushEventListeners();
    	Role::flushEventListeners();
    	Timesheet::flushEventListeners();
    	User::flushEventListeners();

    	$activityQuantity = 3;
    	$costcenterQuantity = 2;
    	$projectQuantity = 3;
    	$roleQuantity = 2;
    	$timesheetQuantity = 6;
    	$userQuantity = 10;


        $this->call([
          RoleSeeder::class,
        ]);

    	//Role::factory()->times($roleQuantity)->create();
    	User::factory()->times($userQuantity)->create();
    	Costcenter::factory()->times($costcenterQuantity)->create();
    	Project::factory()->times($projectQuantity)->create();
    	Activity::factory()->times($activityQuantity)->create();
    	Timesheet::factory()->times($timesheetQuantity)->create();
    }
}
