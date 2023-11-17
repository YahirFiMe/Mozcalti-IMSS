<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Especialista>
 */
class EspecialistaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'clinica_id' => 1,
            'nombres' => $this->faker->firstName(),
            'apellidos' => $this->faker->lastName(),
            'especialidad' => $this->faker->jobTitle(),
            'cedula' => $this->faker->randomNumber(8),
            'horario' => $this->faker->time(),
            'horaEntrada' => $this->faker->time(),
            'horaSalida' => $this->faker->time(),
        ];
    }
}
