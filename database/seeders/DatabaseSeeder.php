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
use Database\Seeders\SubtaskSeeder;

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

    	$this->call([
          SubtaskSeeder::class,
        ]);

		$this->call([
          TasktypeSeeder::class,
        ]);


		$this->call([
          SubjobSeeder::class,
        ]);

		$this->call([
          JobtypeSeeder::class,
        ]);

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

    	User::factory()->times($userQuantity)->create();
    	Costcenter::factory()->times($costcenterQuantity)->create();
    	Project::factory()->times($projectQuantity)->create();
    	Activity::factory()->times($activityQuantity)->create();
    	Timesheet::factory()->times($timesheetQuantity)->create();
    }
}
