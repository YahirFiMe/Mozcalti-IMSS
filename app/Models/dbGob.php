<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class dbGob extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombres',
        'apellidos',
        'sexo',
        'fechaNac',
        'nacionalidad',
        'entidadNac',
    ];

    protected $hidden = [
        'curp',
        'NSS',
    ];

    protected $casts = [
        'fechaNac' => 'date',
    ];
}
