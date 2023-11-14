<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Validator;

class PDFController extends Controller
{
    public function createHistorial(Request $request)
    {
        $validator = Validator::make($request->all(), [
            // Seccion uno
            'Diabetes' => 'required|in:Si,No',
            'Cancer' => 'required|in:Si,No',
            'Nefropatia' => 'required|in:Si,No',
            'Hipertension' => 'required|in:Si,No',
            'Cardiopatia' => 'required|in:Si,No',
            'Malformaciones' => 'required|in:Si,No',
            'Otras' => 'nullable|string',

            // Seccion 2
            'Tabaquismo' => 'required|in:Si,No',
            'CigarrillosDia' => 'nullable|string',
            'CigarrillosYear' => 'nullable|string',
            'Exfumador' => 'nullable|in:Si,No',
            'Alcoholismo' => 'required|in:Si,No',
            'mlAlcoholismo' => 'nullable|string',
            'AlcoholismoYear' => 'nullable|string',
            'Exalcoholico' => 'nullable|in:Si,No',
            'Alergias' => 'required|in:Si,No',
            'AlergiasInfo' => 'nullable|string',

            // Seccion 3
            'Infancia' => 'nullable|string',
            'InfanciaSecuelas' => 'nullable|string',
            'Hospitalizaciones' => 'required|in:Si,No',
            'HospitalizacionesInfo' => 'nullable|string',
            'Quirurgicos' => 'required|in:Si,No',
            'QuirurgicosInfo' => 'nullable|string',
            'Transfusiones' => 'required|in:Si,No',
            'TransfusionesInfo' => 'nullable|string',
            'Fracturas' => 'required|in:Si,No',
            'FracturasInfo' => 'nullable|string',
            'Traumatismo' => 'required|in:Si,No',
            'TraumatismoInfo' => 'nullable|string',
            'Padecimiento' => 'required|in:Si,No',
            'PadecimientoInfo' => 'nullable|string',

            // Seccion 4
            'Motivo' => 'required|string',

            // Seccion 5
            'Evolucion' => 'nullable|string',

            // Seccion 6
            'Cardiovascular' => 'required|in:Si,No',
            'Digestivo' => 'required|in:Si,No',
            'Endocrino' => 'required|in:Si,No',
            'Muscular' => 'required|in:Si,No',
            'Urinario' => 'required|in:Si,No',
            'Hematopoyetico' => 'required|in:Si,No',
            'Piel' => 'required|in:Si,No',
            'Nervioso' => 'required|in:Si,No',

            // seccion 7
            'Medicacion' => 'required|in:Si,No',
            'MedicacionInfo' => 'nullable|string',

            // Seccion 8
            'Comentarios' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            dd($validator);
            return redirect('test')
                ->withErrors($validator)
                ->withInput();
        }

        $information = [
            'fecha' => date('d-m-Y'),
            'diabetes' => $request->Diabetes,
            'cancer' => $request->Cancer,
            'nefropatia' => $request->Nefropatia,
            'hipertension' => $request->Hipertension,
            'cardiopatia' => $request->Cardiopatia,
            'malformaciones' => $request->Malformaciones,
            'otras' => $request->Otras,
            'tabaquismo' => $request->Tabaquismo,
            'cigarrillosDia' => $request->CigarrillosDia,
            'cigarrillosYear' => $request->CigarrillosYear,
            'exfumador' => $request->Exfumador,
            'alcoholismo' => $request->Alcoholismo,
            'mlAlcoholismo' => $request->mlAlcoholismo,
            'alcoholismoYear' => $request->AlcoholismoYear,
            'exalcoholico' => $request->Exalcoholico,
            'alergias' => $request->Alergias,
            'alergiasInfo' => $request->AlergiasInfo,
            'infancia' => $request->Infancia,
            'infanciaSecuelas' => $request->InfanciaSecuelas,
            'hospitalizaciones' => $request->Hospitalizaciones,
            'hospitalizacionesInfo' => $request->HospitalizacionesInfo,
            'quirurgicos' => $request->Quirurgicos,
            'quirurgicosInfo' => $request->QuirurgicosInfo,
            'transfusiones' => $request->Transfusiones,
            'transfusionesInfo' => $request->TransfusionesInfo,
            'fracturas' => $request->Fracturas,
            'fracturasInfo' => $request->FracturasInfo,
            'traumatismo' => $request->Traumatismo,
            'traumatismoInfo' => $request->TraumatismoInfo,
            'padecimiento' => $request->Padecimiento,
            'padecimientoInfo' => $request->PadecimientoInfo,
            'motivo' => $request->Motivo,
            'evolucion' => $request->Evolucion,
            'cardiovascular' => $request->Cardiovascular,
            'respiratorio' => $request->Respiratorio,
            'digestivo' => $request->Digestivo,
            'urinario' => $request->Urinario,
            'endocrino' => $request->Endocrino,
            'muscular' => $request->Muscular,
            'hematopoyetico' => $request->Hematopoyetico,
            'nervioso' => $request->Nervioso,
            'piel' => $request->Piel,
            'medicacion' => $request->Medicacion,
            'medicacionInfo' => $request->MedicacionInfo,
            'comentarios' => $request->Comentarios,
        ];


        $pdf = Pdf::loadView('historial', compact('information'));
        return $pdf->stream();

    }
}