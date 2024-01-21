<?php

namespace Database\Factories;

use App\Models\Timesheet;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Activity;
use App\Models\Jobtype;

class TimesheetFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Timesheet::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $jobtype = Jobtype::all()->random();
        $subjob = $jobtype->subjobs->random();
        $tasktype = $subjob->tasktypes->random();
        $subtask = $tasktype->subtasks->random();

        $supervisor = User::where('role_id', '=', 2)->get()->random();
        $employee = User::where('role_id', '<>', $supervisor->id)->get()->random();

        return [
            'week_ending' => $this->faker->dateTimeBetween('now', '+5 days'),
            'date' => $this->faker->dateTimeBetween('-5 days', 'now'),
            'building' => $this->faker->randomNumber(3),
            'hours' => $this->faker->randomFloat(1, 1, 10),
            'foreman_name' => $this->faker->name,
            'date_submitted' => $this->faker->dateTimeBetween('-5 days', 'now'),
            'jobtype_id' => $jobtype->id,
            'subjob_id' => $subjob->id,
            'tasktype_id' => $tasktype->id,
            'subtask_id' => $subtask->id,
            'supervisor_id' => $supervisor->id,
            'account_id' => $employee->id,
            'activity_id' => Activity::all()->random()->id
        ];
    }
}
