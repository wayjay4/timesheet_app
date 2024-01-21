<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'project_code' => $this->faker->numberBetween(10000, 99999),
            'name' => $this->faker->word,
            'location' => $this->faker->word,
            'other_details' => $this->faker->paragraph(1),
            'account_id' => User::all()->random()->id
        ];
    }
}
