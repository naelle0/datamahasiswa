<?php

namespace Database\Factories;
use App\Models\Mahasiswa;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mahasiswa>
 */
class MahasiswaFactory extends Factory
{
    
    protected $model = Mahasiswa::class;

    public function definition(): array
    {
        return [
            'nis' =>$this->faker->unique()->numerify('#######'),
            'nama_lengkap'=>$this->faker->name(),
            'jenkel'=>$this->faker->randomElement(['L', 'P']),
            'alamat'=>$this->faker->address
        ];
    }
}
