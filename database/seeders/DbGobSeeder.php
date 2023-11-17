<?php

namespace Database\Seeders;

use App\Models\dbGob;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DbGobSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        dbGob::create([
            'nombres' => 'Yahir',
            'apellidos' => 'Figueroa',
            'sexo' => 'Hombre',
            'fechaNac' => '2000-11-12',
            'curp' => 'FIMY030709HJCGNHA6',
            'NSS' => '12345678901',
            'nacionalidad' => 'Mexicana',
            'entidadNac' => 'Jalisco',
        ]);
    }
}
