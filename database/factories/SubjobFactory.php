<?php

namespace Database\Factories;

use App\Models\Subjob;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

class SubjobFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Subjob::class;

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
