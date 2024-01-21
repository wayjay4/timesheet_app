<?php

namespace Database\Factories;

use App\Models\Jobtype;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class JobtypeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Jobtype::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'description' => $this->faker->paragraph(1)
        ];
    }
}
