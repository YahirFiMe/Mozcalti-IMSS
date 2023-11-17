<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cita extends Model
{
    use HasFactory;

    protected $fillable = [
        'paciente_id',
        'especialista_id',
        'clinica_id',
        'fecha',
        'hora',
        'motivo',
        'estado',
    ];


    protected $casts = [
        'fecha' => 'date',
        'hora' => 'time',
    ];



    public function paciente(){
        return $this->belongsTo(Paciente::class);
    }

    public function especialista(){
        return $this->belongsTo(Especialista::class);
    }

    public function clinica(){
        return $this->belongsTo(Clinica::class);
    }


}
