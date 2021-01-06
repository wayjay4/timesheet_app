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
        $subtype = $jobtype->subjobs->random();
        $tasktype = $subtype->tasktypes->random();
        $subtask = $tasktype->subtasks->random();

        $job_type = $jobtype->name.'-'.$subtype->name.'-'.$tasktype->name.'-'.$subtask->name;

        return [
            'week_ending' => $this->faker->dateTimeBetween('now', '+5 days'),
            'date' => $this->faker->dateTimeBetween('-5 days', 'now'),
            'building' => $this->faker->randomNumber(3),
            'hours' => $this->faker->randomFloat(1, 1, 10),
            'type' => $jobtype,
            'subtype' => $subtype,
            'task' => $tasktype,
            'subtask' => $subtask,
            'date_submitted' => $this->faker->dateTimeBetween('-5 days', 'now'),
            'account_id' => User::all()->random()->id,
            'activity_id' => Activity::all()->random()->id
        ];
    }
}
