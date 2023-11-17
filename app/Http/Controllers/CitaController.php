<?php

namespace App\Http\Controllers;

use App\Models\Cita;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class CitaController extends Controller
{
    public function index(Request $request)
    {
        $citas = Cita::where('clinica_id',$request->clinica)
            ->where('especialista_id',$request->especialista)
            ->get();

        return ['citas' => $citas ];
    }


    public function store(Request $request){


        $cita = new Cita();

        $cita->fecha = $request->fecha;
        $cita->hora = $request->hora;
        $cita->paciente_id = $request->paciente_id;
        $cita->especialista_id = $request->especialista_id;
        $cita->clinica_id = $request->clinica_id;
        $cita->estatus = $request->estatus;




        if (!$cita->save()) {
            return ['cita' => 'Error al crear la cita'];
        }

        return ['cita' => 'Cita creada correctamente'];
    }

    public function indexUser($id)
    {
        $citas = Cita::join('especialistas','especialistas.user_id','=','citas.especialista_id')
        ->where('paciente_id',$id)
        ->get();


        return ['citas' => $citas ];
    }
}
