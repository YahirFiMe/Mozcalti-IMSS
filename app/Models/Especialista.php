<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Especialista extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nombres',
        'apellidos',
        'especialidad',
        'cedula',
        'horario',
        'horaEntrada',
        'horaSalida',
        'clinica_id',
    ];


    protected $hidden = [
        'cedula',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function clinica(){
        return $this->belongsTo(Clinica::class);
    }
}
