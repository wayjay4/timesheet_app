<?php

namespace Database\Factories;

use App\Models\Timesheet;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Activity;

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
        return [
            'date' => $this->faker->dateTimeBetween('-5 days', 'now'),
            'hours' => $this->faker->randomFloat(1, 1, 10),
            'comments' => $this->faker->paragraph(1),
            'date_submitted' => $this->faker->dateTimeBetween('-5 days', 'now'),
            'employee_id' => User::all()->random()->id,
            'activity_id' => Activity::all()->random()->id
        ];
    }
}
