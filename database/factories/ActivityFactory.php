<?php

namespace Database\Factories;

use App\Models\Activity;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Project;

class ActivityFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Activity::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'code' => $this->faker->randomElement(['Planning','Development']),

            'other_details' => $this->faker->paragraph(1),
            'start_date' => $this->faker->dateTimeBetween('-2 years', 'now'),
            'end_date' => $this->faker->dateTimeBetween('now', '+5 years'),
            'project_id' => Project::all()->random()->id
        ];
    }
}
