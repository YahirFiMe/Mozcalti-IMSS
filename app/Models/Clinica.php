<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clinica extends Model
{
    use HasFactory;

    protected $fillable = [
        'numClinica',
        'direccion',
    ];

    public function citas(){
        return $this->hasMany(Cita::class);
    }

    public function especialistas(){
        return $this->hasMany(Especialista::class);
    }

}
