<?php

namespace Database\Factories;

use App\Models\Costcenter;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

class CostcenterFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Costcenter::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->word,
            'descripton' => $this->faker->paragraph(1),
            'order_details' => $this->faker->paragraph(1),
            'account_id' => User::all()->random()->id
        ];
    }
}
