<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $firstName = $this->faker->firstName;
        $lastName = $this->faker->lastName;
        $name = $firstName.' '.$lastName;

        return [
            'name' => $name,
            'first_name' => $firstName,
            'last_name' => $lastName,
            'title' => '',
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => Hash::make('supersecret'),
            'remember_token' => Str::random(10),
            'status' => $this->faker->randomElement(['active', 'inactive']),
            'role_id' => Role::all()->random()->id,
        ];
    }
}
